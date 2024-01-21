/**
 * @generated by contrib/devtools/chainparams/generate_chainparams_constants.py
 */

#include <chainparamsconstants.h>

namespace ChainParamsConstants {
    const BlockHash MAINNET_DEFAULT_ASSUME_VALID = BlockHash::fromHex("000000000000000001f456d4a3332cee952781697e1eb13dc91b0148f61181a0");
    const uint256 MAINNET_MINIMUM_CHAIN_WORK = uint256S("0000000000000000000000000000000000000000016b70b24c451ca8f4c070b1");
    const uint64_t MAINNET_ASSUMED_BLOCKCHAIN_SIZE = 211;
    const uint64_t MAINNET_ASSUMED_CHAINSTATE_SIZE = 3;

    const BlockHash TESTNET_DEFAULT_ASSUME_VALID = BlockHash::fromHex("0000000000023bd7c02845749aef2484eedae33242e962efe2080f47f83da3b3");
    const uint256 TESTNET_MINIMUM_CHAIN_WORK = uint256S("00000000000000000000000000000000000000000000006ead0f88e40cec8163");
    const uint64_t TESTNET_ASSUMED_BLOCKCHAIN_SIZE = 55;
    const uint64_t TESTNET_ASSUMED_CHAINSTATE_SIZE = 2;
} // namespace ChainParamsConstants

