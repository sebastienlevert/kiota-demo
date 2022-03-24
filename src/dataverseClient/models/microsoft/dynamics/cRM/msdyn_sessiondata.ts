import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_sessiondata extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_conversationid?: string | undefined;
    private _msdyn_customattribute1?: string | undefined;
    private _msdyn_customattribute2?: string | undefined;
    private _msdyn_customattribute3?: string | undefined;
    private _msdyn_customattribute4?: string | undefined;
    private _msdyn_customattribute5?: string | undefined;
    private _msdyn_externalcorrelationid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_providersessionid?: string | undefined;
    private _msdyn_queueid?: string | undefined;
    private _msdyn_queuename?: string | undefined;
    private _msdyn_sessionadditionaldata?: string | undefined;
    private _msdyn_sessionagentassignedtimestamp?: Date | undefined;
    private _msdyn_sessionchannel?: string | undefined;
    private _msdyn_sessioncreatedtimestamp?: Date | undefined;
    private _msdyn_sessioncreationreason?: string | undefined;
    private _msdyn_sessiondata_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_sessiondata_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_sessiondata_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sessiondata_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sessiondata_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_sessiondata_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_sessiondata_ProcessSession?: Processsession[] | undefined;
    private _msdyn_sessiondata_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_sessiondataid?: string | undefined;
    private _msdyn_sessionqueueassignedtimestamp?: Date | undefined;
    private _msdyn_ucisessionid?: string | undefined;
    private _msdyn_ucisessionname?: string | undefined;
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
     * Instantiates a new msdyn_sessiondata and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_sessiondata)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sessiondata)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_sessiondata)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sessiondata)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_sessiondata)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_sessiondata)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_sessiondata)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_sessiondata)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_sessiondata).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_sessiondata).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_sessiondata).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_sessiondata).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_sessiondata).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_sessiondata).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_sessiondata).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_conversationid": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_conversationid = n.getStringValue(); },
            "msdyn_customattribute1": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_customattribute1 = n.getStringValue(); },
            "msdyn_customattribute2": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_customattribute2 = n.getStringValue(); },
            "msdyn_customattribute3": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_customattribute3 = n.getStringValue(); },
            "msdyn_customattribute4": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_customattribute4 = n.getStringValue(); },
            "msdyn_customattribute5": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_customattribute5 = n.getStringValue(); },
            "msdyn_externalcorrelationid": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_externalcorrelationid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_name = n.getStringValue(); },
            "msdyn_providersessionid": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_providersessionid = n.getStringValue(); },
            "msdyn_queueid": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_queueid = n.getStringValue(); },
            "msdyn_queuename": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_queuename = n.getStringValue(); },
            "msdyn_sessionadditionaldata": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessionadditionaldata = n.getStringValue(); },
            "msdyn_sessionagentassignedtimestamp": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessionagentassignedtimestamp = n.getDateValue(); },
            "msdyn_sessionchannel": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessionchannel = n.getStringValue(); },
            "msdyn_sessioncreatedtimestamp": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessioncreatedtimestamp = n.getDateValue(); },
            "msdyn_sessioncreationreason": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessioncreationreason = n.getStringValue(); },
            "msdyn_sessiondata_AsyncOperations": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondata_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_sessiondata_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondata_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_sessiondata_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondata_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sessiondata_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondata_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sessiondata_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondata_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_sessiondata_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondata_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_sessiondata_ProcessSession": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondata_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_sessiondata_SyncErrors": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondata_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_sessiondataid": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessiondataid = n.getStringValue(); },
            "msdyn_sessionqueueassignedtimestamp": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_sessionqueueassignedtimestamp = n.getDateValue(); },
            "msdyn_ucisessionid": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_ucisessionid = n.getStringValue(); },
            "msdyn_ucisessionname": (o, n) => { (o as unknown as Msdyn_sessiondata).msdyn_ucisessionname = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_sessiondata).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_sessiondata).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_sessiondata).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_sessiondata).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_sessiondata).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_sessiondata).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_sessiondata).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_sessiondata).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_sessiondata).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_sessiondata).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_conversationid property value. 
     * @returns a string
     */
    public get msdyn_conversationid() {
        return this._msdyn_conversationid;
    };
    /**
     * Sets the msdyn_conversationid property value. 
     * @param value Value to set for the msdyn_conversationid property.
     */
    public set msdyn_conversationid(value: string | undefined) {
        this._msdyn_conversationid = value;
    };
    /**
     * Gets the msdyn_customattribute1 property value. 
     * @returns a string
     */
    public get msdyn_customattribute1() {
        return this._msdyn_customattribute1;
    };
    /**
     * Sets the msdyn_customattribute1 property value. 
     * @param value Value to set for the msdyn_customattribute1 property.
     */
    public set msdyn_customattribute1(value: string | undefined) {
        this._msdyn_customattribute1 = value;
    };
    /**
     * Gets the msdyn_customattribute2 property value. 
     * @returns a string
     */
    public get msdyn_customattribute2() {
        return this._msdyn_customattribute2;
    };
    /**
     * Sets the msdyn_customattribute2 property value. 
     * @param value Value to set for the msdyn_customattribute2 property.
     */
    public set msdyn_customattribute2(value: string | undefined) {
        this._msdyn_customattribute2 = value;
    };
    /**
     * Gets the msdyn_customattribute3 property value. 
     * @returns a string
     */
    public get msdyn_customattribute3() {
        return this._msdyn_customattribute3;
    };
    /**
     * Sets the msdyn_customattribute3 property value. 
     * @param value Value to set for the msdyn_customattribute3 property.
     */
    public set msdyn_customattribute3(value: string | undefined) {
        this._msdyn_customattribute3 = value;
    };
    /**
     * Gets the msdyn_customattribute4 property value. 
     * @returns a string
     */
    public get msdyn_customattribute4() {
        return this._msdyn_customattribute4;
    };
    /**
     * Sets the msdyn_customattribute4 property value. 
     * @param value Value to set for the msdyn_customattribute4 property.
     */
    public set msdyn_customattribute4(value: string | undefined) {
        this._msdyn_customattribute4 = value;
    };
    /**
     * Gets the msdyn_customattribute5 property value. 
     * @returns a string
     */
    public get msdyn_customattribute5() {
        return this._msdyn_customattribute5;
    };
    /**
     * Sets the msdyn_customattribute5 property value. 
     * @param value Value to set for the msdyn_customattribute5 property.
     */
    public set msdyn_customattribute5(value: string | undefined) {
        this._msdyn_customattribute5 = value;
    };
    /**
     * Gets the msdyn_externalcorrelationid property value. 
     * @returns a string
     */
    public get msdyn_externalcorrelationid() {
        return this._msdyn_externalcorrelationid;
    };
    /**
     * Sets the msdyn_externalcorrelationid property value. 
     * @param value Value to set for the msdyn_externalcorrelationid property.
     */
    public set msdyn_externalcorrelationid(value: string | undefined) {
        this._msdyn_externalcorrelationid = value;
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
     * Gets the msdyn_providersessionid property value. 
     * @returns a string
     */
    public get msdyn_providersessionid() {
        return this._msdyn_providersessionid;
    };
    /**
     * Sets the msdyn_providersessionid property value. 
     * @param value Value to set for the msdyn_providersessionid property.
     */
    public set msdyn_providersessionid(value: string | undefined) {
        this._msdyn_providersessionid = value;
    };
    /**
     * Gets the msdyn_queueid property value. 
     * @returns a string
     */
    public get msdyn_queueid() {
        return this._msdyn_queueid;
    };
    /**
     * Sets the msdyn_queueid property value. 
     * @param value Value to set for the msdyn_queueid property.
     */
    public set msdyn_queueid(value: string | undefined) {
        this._msdyn_queueid = value;
    };
    /**
     * Gets the msdyn_queuename property value. 
     * @returns a string
     */
    public get msdyn_queuename() {
        return this._msdyn_queuename;
    };
    /**
     * Sets the msdyn_queuename property value. 
     * @param value Value to set for the msdyn_queuename property.
     */
    public set msdyn_queuename(value: string | undefined) {
        this._msdyn_queuename = value;
    };
    /**
     * Gets the msdyn_sessionadditionaldata property value. 
     * @returns a string
     */
    public get msdyn_sessionadditionaldata() {
        return this._msdyn_sessionadditionaldata;
    };
    /**
     * Sets the msdyn_sessionadditionaldata property value. 
     * @param value Value to set for the msdyn_sessionadditionaldata property.
     */
    public set msdyn_sessionadditionaldata(value: string | undefined) {
        this._msdyn_sessionadditionaldata = value;
    };
    /**
     * Gets the msdyn_sessionagentassignedtimestamp property value. 
     * @returns a Date
     */
    public get msdyn_sessionagentassignedtimestamp() {
        return this._msdyn_sessionagentassignedtimestamp;
    };
    /**
     * Sets the msdyn_sessionagentassignedtimestamp property value. 
     * @param value Value to set for the msdyn_sessionagentassignedtimestamp property.
     */
    public set msdyn_sessionagentassignedtimestamp(value: Date | undefined) {
        this._msdyn_sessionagentassignedtimestamp = value;
    };
    /**
     * Gets the msdyn_sessionchannel property value. 
     * @returns a string
     */
    public get msdyn_sessionchannel() {
        return this._msdyn_sessionchannel;
    };
    /**
     * Sets the msdyn_sessionchannel property value. 
     * @param value Value to set for the msdyn_sessionchannel property.
     */
    public set msdyn_sessionchannel(value: string | undefined) {
        this._msdyn_sessionchannel = value;
    };
    /**
     * Gets the msdyn_sessioncreatedtimestamp property value. 
     * @returns a Date
     */
    public get msdyn_sessioncreatedtimestamp() {
        return this._msdyn_sessioncreatedtimestamp;
    };
    /**
     * Sets the msdyn_sessioncreatedtimestamp property value. 
     * @param value Value to set for the msdyn_sessioncreatedtimestamp property.
     */
    public set msdyn_sessioncreatedtimestamp(value: Date | undefined) {
        this._msdyn_sessioncreatedtimestamp = value;
    };
    /**
     * Gets the msdyn_sessioncreationreason property value. 
     * @returns a string
     */
    public get msdyn_sessioncreationreason() {
        return this._msdyn_sessioncreationreason;
    };
    /**
     * Sets the msdyn_sessioncreationreason property value. 
     * @param value Value to set for the msdyn_sessioncreationreason property.
     */
    public set msdyn_sessioncreationreason(value: string | undefined) {
        this._msdyn_sessioncreationreason = value;
    };
    /**
     * Gets the msdyn_sessiondata_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_sessiondata_AsyncOperations() {
        return this._msdyn_sessiondata_AsyncOperations;
    };
    /**
     * Sets the msdyn_sessiondata_AsyncOperations property value. 
     * @param value Value to set for the msdyn_sessiondata_AsyncOperations property.
     */
    public set msdyn_sessiondata_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_sessiondata_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_sessiondata_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_sessiondata_BulkDeleteFailures() {
        return this._msdyn_sessiondata_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_sessiondata_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_sessiondata_BulkDeleteFailures property.
     */
    public set msdyn_sessiondata_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_sessiondata_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_sessiondata_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sessiondata_DuplicateBaseRecord() {
        return this._msdyn_sessiondata_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_sessiondata_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_sessiondata_DuplicateBaseRecord property.
     */
    public set msdyn_sessiondata_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sessiondata_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_sessiondata_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sessiondata_DuplicateMatchingRecord() {
        return this._msdyn_sessiondata_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_sessiondata_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_sessiondata_DuplicateMatchingRecord property.
     */
    public set msdyn_sessiondata_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sessiondata_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_sessiondata_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_sessiondata_MailboxTrackingFolders() {
        return this._msdyn_sessiondata_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_sessiondata_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_sessiondata_MailboxTrackingFolders property.
     */
    public set msdyn_sessiondata_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_sessiondata_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_sessiondata_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_sessiondata_PrincipalObjectAttributeAccesses() {
        return this._msdyn_sessiondata_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_sessiondata_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_sessiondata_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_sessiondata_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_sessiondata_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_sessiondata_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_sessiondata_ProcessSession() {
        return this._msdyn_sessiondata_ProcessSession;
    };
    /**
     * Sets the msdyn_sessiondata_ProcessSession property value. 
     * @param value Value to set for the msdyn_sessiondata_ProcessSession property.
     */
    public set msdyn_sessiondata_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_sessiondata_ProcessSession = value;
    };
    /**
     * Gets the msdyn_sessiondata_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_sessiondata_SyncErrors() {
        return this._msdyn_sessiondata_SyncErrors;
    };
    /**
     * Sets the msdyn_sessiondata_SyncErrors property value. 
     * @param value Value to set for the msdyn_sessiondata_SyncErrors property.
     */
    public set msdyn_sessiondata_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_sessiondata_SyncErrors = value;
    };
    /**
     * Gets the msdyn_sessiondataid property value. 
     * @returns a string
     */
    public get msdyn_sessiondataid() {
        return this._msdyn_sessiondataid;
    };
    /**
     * Sets the msdyn_sessiondataid property value. 
     * @param value Value to set for the msdyn_sessiondataid property.
     */
    public set msdyn_sessiondataid(value: string | undefined) {
        this._msdyn_sessiondataid = value;
    };
    /**
     * Gets the msdyn_sessionqueueassignedtimestamp property value. 
     * @returns a Date
     */
    public get msdyn_sessionqueueassignedtimestamp() {
        return this._msdyn_sessionqueueassignedtimestamp;
    };
    /**
     * Sets the msdyn_sessionqueueassignedtimestamp property value. 
     * @param value Value to set for the msdyn_sessionqueueassignedtimestamp property.
     */
    public set msdyn_sessionqueueassignedtimestamp(value: Date | undefined) {
        this._msdyn_sessionqueueassignedtimestamp = value;
    };
    /**
     * Gets the msdyn_ucisessionid property value. 
     * @returns a string
     */
    public get msdyn_ucisessionid() {
        return this._msdyn_ucisessionid;
    };
    /**
     * Sets the msdyn_ucisessionid property value. 
     * @param value Value to set for the msdyn_ucisessionid property.
     */
    public set msdyn_ucisessionid(value: string | undefined) {
        this._msdyn_ucisessionid = value;
    };
    /**
     * Gets the msdyn_ucisessionname property value. 
     * @returns a string
     */
    public get msdyn_ucisessionname() {
        return this._msdyn_ucisessionname;
    };
    /**
     * Sets the msdyn_ucisessionname property value. 
     * @param value Value to set for the msdyn_ucisessionname property.
     */
    public set msdyn_ucisessionname(value: string | undefined) {
        this._msdyn_ucisessionname = value;
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
        writer.writeStringValue("msdyn_conversationid", this.msdyn_conversationid);
        writer.writeStringValue("msdyn_customattribute1", this.msdyn_customattribute1);
        writer.writeStringValue("msdyn_customattribute2", this.msdyn_customattribute2);
        writer.writeStringValue("msdyn_customattribute3", this.msdyn_customattribute3);
        writer.writeStringValue("msdyn_customattribute4", this.msdyn_customattribute4);
        writer.writeStringValue("msdyn_customattribute5", this.msdyn_customattribute5);
        writer.writeStringValue("msdyn_externalcorrelationid", this.msdyn_externalcorrelationid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_providersessionid", this.msdyn_providersessionid);
        writer.writeStringValue("msdyn_queueid", this.msdyn_queueid);
        writer.writeStringValue("msdyn_queuename", this.msdyn_queuename);
        writer.writeStringValue("msdyn_sessionadditionaldata", this.msdyn_sessionadditionaldata);
        writer.writeDateValue("msdyn_sessionagentassignedtimestamp", this.msdyn_sessionagentassignedtimestamp);
        writer.writeStringValue("msdyn_sessionchannel", this.msdyn_sessionchannel);
        writer.writeDateValue("msdyn_sessioncreatedtimestamp", this.msdyn_sessioncreatedtimestamp);
        writer.writeStringValue("msdyn_sessioncreationreason", this.msdyn_sessioncreationreason);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_sessiondata_AsyncOperations", this.msdyn_sessiondata_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_sessiondata_BulkDeleteFailures", this.msdyn_sessiondata_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sessiondata_DuplicateBaseRecord", this.msdyn_sessiondata_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sessiondata_DuplicateMatchingRecord", this.msdyn_sessiondata_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_sessiondata_MailboxTrackingFolders", this.msdyn_sessiondata_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_sessiondata_PrincipalObjectAttributeAccesses", this.msdyn_sessiondata_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_sessiondata_ProcessSession", this.msdyn_sessiondata_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_sessiondata_SyncErrors", this.msdyn_sessiondata_SyncErrors);
        writer.writeStringValue("msdyn_sessiondataid", this.msdyn_sessiondataid);
        writer.writeDateValue("msdyn_sessionqueueassignedtimestamp", this.msdyn_sessionqueueassignedtimestamp);
        writer.writeStringValue("msdyn_ucisessionid", this.msdyn_ucisessionid);
        writer.writeStringValue("msdyn_ucisessionname", this.msdyn_ucisessionname);
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
