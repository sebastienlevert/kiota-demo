import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_occommunicationprovidersettingFromDiscriminatorValue} from './createMsdyn_occommunicationprovidersettingFromDiscriminatorValue';
import {createMsdyn_occustommessagingchannelFromDiscriminatorValue} from './createMsdyn_occustommessagingchannelFromDiscriminatorValue';
import {createMsdyn_ocfbapplicationFromDiscriminatorValue} from './createMsdyn_ocfbapplicationFromDiscriminatorValue';
import {createMsdyn_oclinechannelconfigFromDiscriminatorValue} from './createMsdyn_oclinechannelconfigFromDiscriminatorValue';
import {createMsdyn_octeamschannelconfigFromDiscriminatorValue} from './createMsdyn_octeamschannelconfigFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_occommunicationprovidersetting, Msdyn_occustommessagingchannel, Msdyn_ocfbapplication, Msdyn_oclinechannelconfig, Msdyn_octeamschannelconfig, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocbotchannelregistration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_communicationprovidersettingid_value?: string | undefined;
    private __msdyn_ocfbapplicationid_value?: string | undefined;
    private __msdyn_oclinechannelconfigid_value?: string | undefined;
    private __msdyn_octeamschannelconfigid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_communicationprovidersettingid?: Msdyn_occommunicationprovidersetting | undefined;
    private _msdyn_iscustommessagingbcr?: boolean | undefined;
    private _msdyn_iscustommessagingcreated?: boolean | undefined;
    private _msdyn_lastvalidateddate?: Date | undefined;
    private _msdyn_messagingendpoint?: string | undefined;
    private _msdyn_msappid?: string | undefined;
    private _msdyn_msappsecret?: string | undefined;
    private _msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration?: Msdyn_occustommessagingchannel[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocbotchannelregistration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocbotchannelregistration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocbotchannelregistration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocbotchannelregistration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocbotchannelregistration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocbotchannelregistration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocbotchannelregistration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocbotchannelregistrationid?: string | undefined;
    private _msdyn_ocfbapplicationid?: Msdyn_ocfbapplication | undefined;
    private _msdyn_oclinechannelconfigid?: Msdyn_oclinechannelconfig | undefined;
    private _msdyn_octeamschannelconfigid?: Msdyn_octeamschannelconfig | undefined;
    private _msdyn_validationstatus?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_communicationprovidersettingid_value property value. 
     * @returns a string
     */
    public get _msdyn_communicationprovidersettingid_value() {
        return this.__msdyn_communicationprovidersettingid_value;
    };
    /**
     * Sets the _msdyn_communicationprovidersettingid_value property value. 
     * @param value Value to set for the _msdyn_communicationprovidersettingid_value property.
     */
    public set _msdyn_communicationprovidersettingid_value(value: string | undefined) {
        this.__msdyn_communicationprovidersettingid_value = value;
    };
    /**
     * Gets the _msdyn_ocfbapplicationid_value property value. 
     * @returns a string
     */
    public get _msdyn_ocfbapplicationid_value() {
        return this.__msdyn_ocfbapplicationid_value;
    };
    /**
     * Sets the _msdyn_ocfbapplicationid_value property value. 
     * @param value Value to set for the _msdyn_ocfbapplicationid_value property.
     */
    public set _msdyn_ocfbapplicationid_value(value: string | undefined) {
        this.__msdyn_ocfbapplicationid_value = value;
    };
    /**
     * Gets the _msdyn_oclinechannelconfigid_value property value. 
     * @returns a string
     */
    public get _msdyn_oclinechannelconfigid_value() {
        return this.__msdyn_oclinechannelconfigid_value;
    };
    /**
     * Sets the _msdyn_oclinechannelconfigid_value property value. 
     * @param value Value to set for the _msdyn_oclinechannelconfigid_value property.
     */
    public set _msdyn_oclinechannelconfigid_value(value: string | undefined) {
        this.__msdyn_oclinechannelconfigid_value = value;
    };
    /**
     * Gets the _msdyn_octeamschannelconfigid_value property value. 
     * @returns a string
     */
    public get _msdyn_octeamschannelconfigid_value() {
        return this.__msdyn_octeamschannelconfigid_value;
    };
    /**
     * Sets the _msdyn_octeamschannelconfigid_value property value. 
     * @param value Value to set for the _msdyn_octeamschannelconfigid_value property.
     */
    public set _msdyn_octeamschannelconfigid_value(value: string | undefined) {
        this.__msdyn_octeamschannelconfigid_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyn_ocbotchannelregistration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_communicationprovidersettingid_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._msdyn_communicationprovidersettingid_value = n.getStringValue(); },
            "_msdyn_ocfbapplicationid_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._msdyn_ocfbapplicationid_value = n.getStringValue(); },
            "_msdyn_oclinechannelconfigid_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._msdyn_oclinechannelconfigid_value = n.getStringValue(); },
            "_msdyn_octeamschannelconfigid_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._msdyn_octeamschannelconfigid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_communicationprovidersettingid": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_communicationprovidersettingid = n.getObjectValue<Msdyn_occommunicationprovidersetting>(createMsdyn_occommunicationprovidersettingFromDiscriminatorValue); },
            "msdyn_iscustommessagingbcr": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_iscustommessagingbcr = n.getBooleanValue(); },
            "msdyn_iscustommessagingcreated": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_iscustommessagingcreated = n.getBooleanValue(); },
            "msdyn_lastvalidateddate": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_lastvalidateddate = n.getDateValue(); },
            "msdyn_messagingendpoint": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_messagingendpoint = n.getStringValue(); },
            "msdyn_msappid": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_msappid = n.getStringValue(); },
            "msdyn_msappsecret": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_msappsecret = n.getStringValue(); },
            "msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration = n.getCollectionOfObjectValues<Msdyn_occustommessagingchannel>(createMsdyn_occustommessagingchannelFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_name = n.getStringValue(); },
            "msdyn_ocbotchannelregistration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocbotchannelregistration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocbotchannelregistration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocbotchannelregistration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocbotchannelregistration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocbotchannelregistration_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocbotchannelregistration_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocbotchannelregistrationid": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocbotchannelregistrationid = n.getStringValue(); },
            "msdyn_ocfbapplicationid": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_ocfbapplicationid = n.getObjectValue<Msdyn_ocfbapplication>(createMsdyn_ocfbapplicationFromDiscriminatorValue); },
            "msdyn_oclinechannelconfigid": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_oclinechannelconfigid = n.getObjectValue<Msdyn_oclinechannelconfig>(createMsdyn_oclinechannelconfigFromDiscriminatorValue); },
            "msdyn_octeamschannelconfigid": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_octeamschannelconfigid = n.getObjectValue<Msdyn_octeamschannelconfig>(createMsdyn_octeamschannelconfigFromDiscriminatorValue); },
            "msdyn_validationstatus": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).msdyn_validationstatus = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocbotchannelregistration).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_communicationprovidersettingid property value. 
     * @returns a msdyn_occommunicationprovidersetting
     */
    public get msdyn_communicationprovidersettingid() {
        return this._msdyn_communicationprovidersettingid;
    };
    /**
     * Sets the msdyn_communicationprovidersettingid property value. 
     * @param value Value to set for the msdyn_communicationprovidersettingid property.
     */
    public set msdyn_communicationprovidersettingid(value: Msdyn_occommunicationprovidersetting | undefined) {
        this._msdyn_communicationprovidersettingid = value;
    };
    /**
     * Gets the msdyn_iscustommessagingbcr property value. 
     * @returns a boolean
     */
    public get msdyn_iscustommessagingbcr() {
        return this._msdyn_iscustommessagingbcr;
    };
    /**
     * Sets the msdyn_iscustommessagingbcr property value. 
     * @param value Value to set for the msdyn_iscustommessagingbcr property.
     */
    public set msdyn_iscustommessagingbcr(value: boolean | undefined) {
        this._msdyn_iscustommessagingbcr = value;
    };
    /**
     * Gets the msdyn_iscustommessagingcreated property value. 
     * @returns a boolean
     */
    public get msdyn_iscustommessagingcreated() {
        return this._msdyn_iscustommessagingcreated;
    };
    /**
     * Sets the msdyn_iscustommessagingcreated property value. 
     * @param value Value to set for the msdyn_iscustommessagingcreated property.
     */
    public set msdyn_iscustommessagingcreated(value: boolean | undefined) {
        this._msdyn_iscustommessagingcreated = value;
    };
    /**
     * Gets the msdyn_lastvalidateddate property value. 
     * @returns a Date
     */
    public get msdyn_lastvalidateddate() {
        return this._msdyn_lastvalidateddate;
    };
    /**
     * Sets the msdyn_lastvalidateddate property value. 
     * @param value Value to set for the msdyn_lastvalidateddate property.
     */
    public set msdyn_lastvalidateddate(value: Date | undefined) {
        this._msdyn_lastvalidateddate = value;
    };
    /**
     * Gets the msdyn_messagingendpoint property value. 
     * @returns a string
     */
    public get msdyn_messagingendpoint() {
        return this._msdyn_messagingendpoint;
    };
    /**
     * Sets the msdyn_messagingendpoint property value. 
     * @param value Value to set for the msdyn_messagingendpoint property.
     */
    public set msdyn_messagingendpoint(value: string | undefined) {
        this._msdyn_messagingendpoint = value;
    };
    /**
     * Gets the msdyn_msappid property value. 
     * @returns a string
     */
    public get msdyn_msappid() {
        return this._msdyn_msappid;
    };
    /**
     * Sets the msdyn_msappid property value. 
     * @param value Value to set for the msdyn_msappid property.
     */
    public set msdyn_msappid(value: string | undefined) {
        this._msdyn_msappid = value;
    };
    /**
     * Gets the msdyn_msappsecret property value. 
     * @returns a string
     */
    public get msdyn_msappsecret() {
        return this._msdyn_msappsecret;
    };
    /**
     * Sets the msdyn_msappsecret property value. 
     * @param value Value to set for the msdyn_msappsecret property.
     */
    public set msdyn_msappsecret(value: string | undefined) {
        this._msdyn_msappsecret = value;
    };
    /**
     * Gets the msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration property value. 
     * @returns a msdyn_occustommessagingchannel
     */
    public get msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration() {
        return this._msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration;
    };
    /**
     * Sets the msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration property value. 
     * @param value Value to set for the msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration property.
     */
    public set msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration(value: Msdyn_occustommessagingchannel[] | undefined) {
        this._msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocbotchannelregistration_AsyncOperations() {
        return this._msdyn_ocbotchannelregistration_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocbotchannelregistration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistration_AsyncOperations property.
     */
    public set msdyn_ocbotchannelregistration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocbotchannelregistration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocbotchannelregistration_BulkDeleteFailures() {
        return this._msdyn_ocbotchannelregistration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocbotchannelregistration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistration_BulkDeleteFailures property.
     */
    public set msdyn_ocbotchannelregistration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocbotchannelregistration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocbotchannelregistration_DuplicateBaseRecord() {
        return this._msdyn_ocbotchannelregistration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocbotchannelregistration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistration_DuplicateBaseRecord property.
     */
    public set msdyn_ocbotchannelregistration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocbotchannelregistration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocbotchannelregistration_DuplicateMatchingRecord() {
        return this._msdyn_ocbotchannelregistration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocbotchannelregistration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistration_DuplicateMatchingRecord property.
     */
    public set msdyn_ocbotchannelregistration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocbotchannelregistration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocbotchannelregistration_MailboxTrackingFolders() {
        return this._msdyn_ocbotchannelregistration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocbotchannelregistration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistration_MailboxTrackingFolders property.
     */
    public set msdyn_ocbotchannelregistration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocbotchannelregistration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocbotchannelregistration_ProcessSession() {
        return this._msdyn_ocbotchannelregistration_ProcessSession;
    };
    /**
     * Sets the msdyn_ocbotchannelregistration_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistration_ProcessSession property.
     */
    public set msdyn_ocbotchannelregistration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocbotchannelregistration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocbotchannelregistration_SyncErrors() {
        return this._msdyn_ocbotchannelregistration_SyncErrors;
    };
    /**
     * Sets the msdyn_ocbotchannelregistration_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistration_SyncErrors property.
     */
    public set msdyn_ocbotchannelregistration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocbotchannelregistration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocbotchannelregistrationid property value. 
     * @returns a string
     */
    public get msdyn_ocbotchannelregistrationid() {
        return this._msdyn_ocbotchannelregistrationid;
    };
    /**
     * Sets the msdyn_ocbotchannelregistrationid property value. 
     * @param value Value to set for the msdyn_ocbotchannelregistrationid property.
     */
    public set msdyn_ocbotchannelregistrationid(value: string | undefined) {
        this._msdyn_ocbotchannelregistrationid = value;
    };
    /**
     * Gets the msdyn_ocfbapplicationid property value. 
     * @returns a msdyn_ocfbapplication
     */
    public get msdyn_ocfbapplicationid() {
        return this._msdyn_ocfbapplicationid;
    };
    /**
     * Sets the msdyn_ocfbapplicationid property value. 
     * @param value Value to set for the msdyn_ocfbapplicationid property.
     */
    public set msdyn_ocfbapplicationid(value: Msdyn_ocfbapplication | undefined) {
        this._msdyn_ocfbapplicationid = value;
    };
    /**
     * Gets the msdyn_oclinechannelconfigid property value. 
     * @returns a msdyn_oclinechannelconfig
     */
    public get msdyn_oclinechannelconfigid() {
        return this._msdyn_oclinechannelconfigid;
    };
    /**
     * Sets the msdyn_oclinechannelconfigid property value. 
     * @param value Value to set for the msdyn_oclinechannelconfigid property.
     */
    public set msdyn_oclinechannelconfigid(value: Msdyn_oclinechannelconfig | undefined) {
        this._msdyn_oclinechannelconfigid = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfigid property value. 
     * @returns a msdyn_octeamschannelconfig
     */
    public get msdyn_octeamschannelconfigid() {
        return this._msdyn_octeamschannelconfigid;
    };
    /**
     * Sets the msdyn_octeamschannelconfigid property value. 
     * @param value Value to set for the msdyn_octeamschannelconfigid property.
     */
    public set msdyn_octeamschannelconfigid(value: Msdyn_octeamschannelconfig | undefined) {
        this._msdyn_octeamschannelconfigid = value;
    };
    /**
     * Gets the msdyn_validationstatus property value. 
     * @returns a string
     */
    public get msdyn_validationstatus() {
        return this._msdyn_validationstatus;
    };
    /**
     * Sets the msdyn_validationstatus property value. 
     * @param value Value to set for the msdyn_validationstatus property.
     */
    public set msdyn_validationstatus(value: string | undefined) {
        this._msdyn_validationstatus = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_communicationprovidersettingid_value", this._msdyn_communicationprovidersettingid_value);
        writer.writeStringValue("_msdyn_ocfbapplicationid_value", this._msdyn_ocfbapplicationid_value);
        writer.writeStringValue("_msdyn_oclinechannelconfigid_value", this._msdyn_oclinechannelconfigid_value);
        writer.writeStringValue("_msdyn_octeamschannelconfigid_value", this._msdyn_octeamschannelconfigid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_occommunicationprovidersetting>("msdyn_communicationprovidersettingid", this.msdyn_communicationprovidersettingid);
        writer.writeBooleanValue("msdyn_iscustommessagingbcr", this.msdyn_iscustommessagingbcr);
        writer.writeBooleanValue("msdyn_iscustommessagingcreated", this.msdyn_iscustommessagingcreated);
        writer.writeDateValue("msdyn_lastvalidateddate", this.msdyn_lastvalidateddate);
        writer.writeStringValue("msdyn_messagingendpoint", this.msdyn_messagingendpoint);
        writer.writeStringValue("msdyn_msappid", this.msdyn_msappid);
        writer.writeStringValue("msdyn_msappsecret", this.msdyn_msappsecret);
        writer.writeCollectionOfObjectValues<Msdyn_occustommessagingchannel>("msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration", this.msdyn_msdyn_ocbotchannelregistration_msdyn_occustommessagingchannel_custombotchannelregistration);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocbotchannelregistration_AsyncOperations", this.msdyn_ocbotchannelregistration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocbotchannelregistration_BulkDeleteFailures", this.msdyn_ocbotchannelregistration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocbotchannelregistration_DuplicateBaseRecord", this.msdyn_ocbotchannelregistration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocbotchannelregistration_DuplicateMatchingRecord", this.msdyn_ocbotchannelregistration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocbotchannelregistration_MailboxTrackingFolders", this.msdyn_ocbotchannelregistration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses", this.msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocbotchannelregistration_ProcessSession", this.msdyn_ocbotchannelregistration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocbotchannelregistration_SyncErrors", this.msdyn_ocbotchannelregistration_SyncErrors);
        writer.writeStringValue("msdyn_ocbotchannelregistrationid", this.msdyn_ocbotchannelregistrationid);
        writer.writeObjectValue<Msdyn_ocfbapplication>("msdyn_ocfbapplicationid", this.msdyn_ocfbapplicationid);
        writer.writeObjectValue<Msdyn_oclinechannelconfig>("msdyn_oclinechannelconfigid", this.msdyn_oclinechannelconfigid);
        writer.writeObjectValue<Msdyn_octeamschannelconfig>("msdyn_octeamschannelconfigid", this.msdyn_octeamschannelconfigid);
        writer.writeStringValue("msdyn_validationstatus", this.msdyn_validationstatus);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
