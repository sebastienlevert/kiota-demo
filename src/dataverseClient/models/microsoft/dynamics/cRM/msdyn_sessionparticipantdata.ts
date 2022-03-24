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

export class Msdyn_sessionparticipantdata extends Crmbaseentity implements Parsable {
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
    private _msdyn_name?: string | undefined;
    private _msdyn_participantaddedtimestamp?: Date | undefined;
    private _msdyn_participantassignreason?: string | undefined;
    private _msdyn_participantid?: string | undefined;
    private _msdyn_participantmode?: string | undefined;
    private _msdyn_participantname?: string | undefined;
    private _msdyn_participanttype?: string | undefined;
    private _msdyn_providersessionid?: string | undefined;
    private _msdyn_sessionparticipantdata_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_sessionparticipantdata_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_sessionparticipantdata_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sessionparticipantdata_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sessionparticipantdata_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_sessionparticipantdata_ProcessSession?: Processsession[] | undefined;
    private _msdyn_sessionparticipantdata_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_sessionparticipantdataid?: string | undefined;
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
     * Instantiates a new msdyn_sessionparticipantdata and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_conversationid": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_conversationid = n.getStringValue(); },
            "msdyn_customattribute1": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_customattribute1 = n.getStringValue(); },
            "msdyn_customattribute2": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_customattribute2 = n.getStringValue(); },
            "msdyn_customattribute3": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_customattribute3 = n.getStringValue(); },
            "msdyn_customattribute4": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_customattribute4 = n.getStringValue(); },
            "msdyn_customattribute5": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_customattribute5 = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_name = n.getStringValue(); },
            "msdyn_participantaddedtimestamp": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_participantaddedtimestamp = n.getDateValue(); },
            "msdyn_participantassignreason": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_participantassignreason = n.getStringValue(); },
            "msdyn_participantid": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_participantid = n.getStringValue(); },
            "msdyn_participantmode": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_participantmode = n.getStringValue(); },
            "msdyn_participantname": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_participantname = n.getStringValue(); },
            "msdyn_participanttype": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_participanttype = n.getStringValue(); },
            "msdyn_providersessionid": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_providersessionid = n.getStringValue(); },
            "msdyn_sessionparticipantdata_AsyncOperations": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdata_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_sessionparticipantdata_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdata_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_sessionparticipantdata_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdata_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sessionparticipantdata_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdata_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sessionparticipantdata_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdata_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_sessionparticipantdata_ProcessSession": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdata_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_sessionparticipantdata_SyncErrors": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdata_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_sessionparticipantdataid": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).msdyn_sessionparticipantdataid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_sessionparticipantdata).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_participantaddedtimestamp property value. 
     * @returns a Date
     */
    public get msdyn_participantaddedtimestamp() {
        return this._msdyn_participantaddedtimestamp;
    };
    /**
     * Sets the msdyn_participantaddedtimestamp property value. 
     * @param value Value to set for the msdyn_participantaddedtimestamp property.
     */
    public set msdyn_participantaddedtimestamp(value: Date | undefined) {
        this._msdyn_participantaddedtimestamp = value;
    };
    /**
     * Gets the msdyn_participantassignreason property value. 
     * @returns a string
     */
    public get msdyn_participantassignreason() {
        return this._msdyn_participantassignreason;
    };
    /**
     * Sets the msdyn_participantassignreason property value. 
     * @param value Value to set for the msdyn_participantassignreason property.
     */
    public set msdyn_participantassignreason(value: string | undefined) {
        this._msdyn_participantassignreason = value;
    };
    /**
     * Gets the msdyn_participantid property value. 
     * @returns a string
     */
    public get msdyn_participantid() {
        return this._msdyn_participantid;
    };
    /**
     * Sets the msdyn_participantid property value. 
     * @param value Value to set for the msdyn_participantid property.
     */
    public set msdyn_participantid(value: string | undefined) {
        this._msdyn_participantid = value;
    };
    /**
     * Gets the msdyn_participantmode property value. 
     * @returns a string
     */
    public get msdyn_participantmode() {
        return this._msdyn_participantmode;
    };
    /**
     * Sets the msdyn_participantmode property value. 
     * @param value Value to set for the msdyn_participantmode property.
     */
    public set msdyn_participantmode(value: string | undefined) {
        this._msdyn_participantmode = value;
    };
    /**
     * Gets the msdyn_participantname property value. 
     * @returns a string
     */
    public get msdyn_participantname() {
        return this._msdyn_participantname;
    };
    /**
     * Sets the msdyn_participantname property value. 
     * @param value Value to set for the msdyn_participantname property.
     */
    public set msdyn_participantname(value: string | undefined) {
        this._msdyn_participantname = value;
    };
    /**
     * Gets the msdyn_participanttype property value. 
     * @returns a string
     */
    public get msdyn_participanttype() {
        return this._msdyn_participanttype;
    };
    /**
     * Sets the msdyn_participanttype property value. 
     * @param value Value to set for the msdyn_participanttype property.
     */
    public set msdyn_participanttype(value: string | undefined) {
        this._msdyn_participanttype = value;
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
     * Gets the msdyn_sessionparticipantdata_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_sessionparticipantdata_AsyncOperations() {
        return this._msdyn_sessionparticipantdata_AsyncOperations;
    };
    /**
     * Sets the msdyn_sessionparticipantdata_AsyncOperations property value. 
     * @param value Value to set for the msdyn_sessionparticipantdata_AsyncOperations property.
     */
    public set msdyn_sessionparticipantdata_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_sessionparticipantdata_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_sessionparticipantdata_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_sessionparticipantdata_BulkDeleteFailures() {
        return this._msdyn_sessionparticipantdata_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_sessionparticipantdata_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_sessionparticipantdata_BulkDeleteFailures property.
     */
    public set msdyn_sessionparticipantdata_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_sessionparticipantdata_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_sessionparticipantdata_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sessionparticipantdata_DuplicateBaseRecord() {
        return this._msdyn_sessionparticipantdata_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_sessionparticipantdata_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_sessionparticipantdata_DuplicateBaseRecord property.
     */
    public set msdyn_sessionparticipantdata_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sessionparticipantdata_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_sessionparticipantdata_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sessionparticipantdata_DuplicateMatchingRecord() {
        return this._msdyn_sessionparticipantdata_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_sessionparticipantdata_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_sessionparticipantdata_DuplicateMatchingRecord property.
     */
    public set msdyn_sessionparticipantdata_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sessionparticipantdata_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_sessionparticipantdata_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_sessionparticipantdata_MailboxTrackingFolders() {
        return this._msdyn_sessionparticipantdata_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_sessionparticipantdata_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_sessionparticipantdata_MailboxTrackingFolders property.
     */
    public set msdyn_sessionparticipantdata_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_sessionparticipantdata_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses() {
        return this._msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_sessionparticipantdata_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_sessionparticipantdata_ProcessSession() {
        return this._msdyn_sessionparticipantdata_ProcessSession;
    };
    /**
     * Sets the msdyn_sessionparticipantdata_ProcessSession property value. 
     * @param value Value to set for the msdyn_sessionparticipantdata_ProcessSession property.
     */
    public set msdyn_sessionparticipantdata_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_sessionparticipantdata_ProcessSession = value;
    };
    /**
     * Gets the msdyn_sessionparticipantdata_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_sessionparticipantdata_SyncErrors() {
        return this._msdyn_sessionparticipantdata_SyncErrors;
    };
    /**
     * Sets the msdyn_sessionparticipantdata_SyncErrors property value. 
     * @param value Value to set for the msdyn_sessionparticipantdata_SyncErrors property.
     */
    public set msdyn_sessionparticipantdata_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_sessionparticipantdata_SyncErrors = value;
    };
    /**
     * Gets the msdyn_sessionparticipantdataid property value. 
     * @returns a string
     */
    public get msdyn_sessionparticipantdataid() {
        return this._msdyn_sessionparticipantdataid;
    };
    /**
     * Sets the msdyn_sessionparticipantdataid property value. 
     * @param value Value to set for the msdyn_sessionparticipantdataid property.
     */
    public set msdyn_sessionparticipantdataid(value: string | undefined) {
        this._msdyn_sessionparticipantdataid = value;
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
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeDateValue("msdyn_participantaddedtimestamp", this.msdyn_participantaddedtimestamp);
        writer.writeStringValue("msdyn_participantassignreason", this.msdyn_participantassignreason);
        writer.writeStringValue("msdyn_participantid", this.msdyn_participantid);
        writer.writeStringValue("msdyn_participantmode", this.msdyn_participantmode);
        writer.writeStringValue("msdyn_participantname", this.msdyn_participantname);
        writer.writeStringValue("msdyn_participanttype", this.msdyn_participanttype);
        writer.writeStringValue("msdyn_providersessionid", this.msdyn_providersessionid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_sessionparticipantdata_AsyncOperations", this.msdyn_sessionparticipantdata_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_sessionparticipantdata_BulkDeleteFailures", this.msdyn_sessionparticipantdata_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sessionparticipantdata_DuplicateBaseRecord", this.msdyn_sessionparticipantdata_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sessionparticipantdata_DuplicateMatchingRecord", this.msdyn_sessionparticipantdata_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_sessionparticipantdata_MailboxTrackingFolders", this.msdyn_sessionparticipantdata_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses", this.msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_sessionparticipantdata_ProcessSession", this.msdyn_sessionparticipantdata_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_sessionparticipantdata_SyncErrors", this.msdyn_sessionparticipantdata_SyncErrors);
        writer.writeStringValue("msdyn_sessionparticipantdataid", this.msdyn_sessionparticipantdataid);
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
