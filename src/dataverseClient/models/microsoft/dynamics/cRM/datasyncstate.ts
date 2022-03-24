import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue} from './createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organizationdatasyncsubscriptionentity, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Datasyncstate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __entityname_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationdatasyncsubscriptionid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datasyncstate_AsyncOperations?: Asyncoperation[] | undefined;
    private _datasyncstate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _datasyncstate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _datasyncstate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _datasyncstate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _datasyncstate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _datasyncstate_ProcessSession?: Processsession[] | undefined;
    private _datasyncstate_SyncErrors?: Syncerror[] | undefined;
    private _datasyncstateid?: string | undefined;
    private _entityname?: Organizationdatasyncsubscriptionentity | undefined;
    private _importsequencenumber?: number | undefined;
    private _lastdataversion?: string | undefined;
    private _lastmetadataversion?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationdatasyncsubscriptionId?: Organizationdatasyncsubscriptionentity | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _pagingcookie?: string | undefined;
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
     * Gets the _entityname_value property value. 
     * @returns a string
     */
    public get _entityname_value() {
        return this.__entityname_value;
    };
    /**
     * Sets the _entityname_value property value. 
     * @param value Value to set for the _entityname_value property.
     */
    public set _entityname_value(value: string | undefined) {
        this.__entityname_value = value;
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
     * Gets the _organizationdatasyncsubscriptionid_value property value. 
     * @returns a string
     */
    public get _organizationdatasyncsubscriptionid_value() {
        return this.__organizationdatasyncsubscriptionid_value;
    };
    /**
     * Sets the _organizationdatasyncsubscriptionid_value property value. 
     * @param value Value to set for the _organizationdatasyncsubscriptionid_value property.
     */
    public set _organizationdatasyncsubscriptionid_value(value: string | undefined) {
        this.__organizationdatasyncsubscriptionid_value = value;
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
     * Instantiates a new datasyncstate and sets the default values.
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
     * Gets the datasyncstate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get datasyncstate_AsyncOperations() {
        return this._datasyncstate_AsyncOperations;
    };
    /**
     * Sets the datasyncstate_AsyncOperations property value. 
     * @param value Value to set for the datasyncstate_AsyncOperations property.
     */
    public set datasyncstate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._datasyncstate_AsyncOperations = value;
    };
    /**
     * Gets the datasyncstate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get datasyncstate_BulkDeleteFailures() {
        return this._datasyncstate_BulkDeleteFailures;
    };
    /**
     * Sets the datasyncstate_BulkDeleteFailures property value. 
     * @param value Value to set for the datasyncstate_BulkDeleteFailures property.
     */
    public set datasyncstate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._datasyncstate_BulkDeleteFailures = value;
    };
    /**
     * Gets the datasyncstate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get datasyncstate_DuplicateBaseRecord() {
        return this._datasyncstate_DuplicateBaseRecord;
    };
    /**
     * Sets the datasyncstate_DuplicateBaseRecord property value. 
     * @param value Value to set for the datasyncstate_DuplicateBaseRecord property.
     */
    public set datasyncstate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._datasyncstate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the datasyncstate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get datasyncstate_DuplicateMatchingRecord() {
        return this._datasyncstate_DuplicateMatchingRecord;
    };
    /**
     * Sets the datasyncstate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the datasyncstate_DuplicateMatchingRecord property.
     */
    public set datasyncstate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._datasyncstate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the datasyncstate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get datasyncstate_MailboxTrackingFolders() {
        return this._datasyncstate_MailboxTrackingFolders;
    };
    /**
     * Sets the datasyncstate_MailboxTrackingFolders property value. 
     * @param value Value to set for the datasyncstate_MailboxTrackingFolders property.
     */
    public set datasyncstate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._datasyncstate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the datasyncstate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get datasyncstate_PrincipalObjectAttributeAccesses() {
        return this._datasyncstate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the datasyncstate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the datasyncstate_PrincipalObjectAttributeAccesses property.
     */
    public set datasyncstate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._datasyncstate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the datasyncstate_ProcessSession property value. 
     * @returns a processsession
     */
    public get datasyncstate_ProcessSession() {
        return this._datasyncstate_ProcessSession;
    };
    /**
     * Sets the datasyncstate_ProcessSession property value. 
     * @param value Value to set for the datasyncstate_ProcessSession property.
     */
    public set datasyncstate_ProcessSession(value: Processsession[] | undefined) {
        this._datasyncstate_ProcessSession = value;
    };
    /**
     * Gets the datasyncstate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get datasyncstate_SyncErrors() {
        return this._datasyncstate_SyncErrors;
    };
    /**
     * Sets the datasyncstate_SyncErrors property value. 
     * @param value Value to set for the datasyncstate_SyncErrors property.
     */
    public set datasyncstate_SyncErrors(value: Syncerror[] | undefined) {
        this._datasyncstate_SyncErrors = value;
    };
    /**
     * Gets the datasyncstateid property value. 
     * @returns a string
     */
    public get datasyncstateid() {
        return this._datasyncstateid;
    };
    /**
     * Sets the datasyncstateid property value. 
     * @param value Value to set for the datasyncstateid property.
     */
    public set datasyncstateid(value: string | undefined) {
        this._datasyncstateid = value;
    };
    /**
     * Gets the entityname property value. 
     * @returns a organizationdatasyncsubscriptionentity
     */
    public get entityname() {
        return this._entityname;
    };
    /**
     * Sets the entityname property value. 
     * @param value Value to set for the entityname property.
     */
    public set entityname(value: Organizationdatasyncsubscriptionentity | undefined) {
        this._entityname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Datasyncstate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Datasyncstate)._createdonbehalfby_value = n.getStringValue(); },
            "_entityname_value": (o, n) => { (o as unknown as Datasyncstate)._entityname_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Datasyncstate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Datasyncstate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationdatasyncsubscriptionid_value": (o, n) => { (o as unknown as Datasyncstate)._organizationdatasyncsubscriptionid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Datasyncstate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Datasyncstate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Datasyncstate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Datasyncstate)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Datasyncstate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Datasyncstate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Datasyncstate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datasyncstate_AsyncOperations": (o, n) => { (o as unknown as Datasyncstate).datasyncstate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "datasyncstate_BulkDeleteFailures": (o, n) => { (o as unknown as Datasyncstate).datasyncstate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "datasyncstate_DuplicateBaseRecord": (o, n) => { (o as unknown as Datasyncstate).datasyncstate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datasyncstate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Datasyncstate).datasyncstate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datasyncstate_MailboxTrackingFolders": (o, n) => { (o as unknown as Datasyncstate).datasyncstate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "datasyncstate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Datasyncstate).datasyncstate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "datasyncstate_ProcessSession": (o, n) => { (o as unknown as Datasyncstate).datasyncstate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "datasyncstate_SyncErrors": (o, n) => { (o as unknown as Datasyncstate).datasyncstate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "datasyncstateid": (o, n) => { (o as unknown as Datasyncstate).datasyncstateid = n.getStringValue(); },
            "entityname": (o, n) => { (o as unknown as Datasyncstate).entityname = n.getObjectValue<Organizationdatasyncsubscriptionentity>(createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Datasyncstate).importsequencenumber = n.getNumberValue(); },
            "lastdataversion": (o, n) => { (o as unknown as Datasyncstate).lastdataversion = n.getStringValue(); },
            "lastmetadataversion": (o, n) => { (o as unknown as Datasyncstate).lastmetadataversion = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Datasyncstate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Datasyncstate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Datasyncstate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Datasyncstate).name = n.getStringValue(); },
            "organizationdatasyncsubscriptionId": (o, n) => { (o as unknown as Datasyncstate).organizationdatasyncsubscriptionId = n.getObjectValue<Organizationdatasyncsubscriptionentity>(createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Datasyncstate).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Datasyncstate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Datasyncstate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Datasyncstate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Datasyncstate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "pagingcookie": (o, n) => { (o as unknown as Datasyncstate).pagingcookie = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Datasyncstate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Datasyncstate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Datasyncstate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Datasyncstate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Datasyncstate).versionnumber = n.getNumberValue(); },
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
     * Gets the lastdataversion property value. 
     * @returns a string
     */
    public get lastdataversion() {
        return this._lastdataversion;
    };
    /**
     * Sets the lastdataversion property value. 
     * @param value Value to set for the lastdataversion property.
     */
    public set lastdataversion(value: string | undefined) {
        this._lastdataversion = value;
    };
    /**
     * Gets the lastmetadataversion property value. 
     * @returns a string
     */
    public get lastmetadataversion() {
        return this._lastmetadataversion;
    };
    /**
     * Sets the lastmetadataversion property value. 
     * @param value Value to set for the lastmetadataversion property.
     */
    public set lastmetadataversion(value: string | undefined) {
        this._lastmetadataversion = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionId property value. 
     * @returns a organizationdatasyncsubscriptionentity
     */
    public get organizationdatasyncsubscriptionId() {
        return this._organizationdatasyncsubscriptionId;
    };
    /**
     * Sets the organizationdatasyncsubscriptionId property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionId property.
     */
    public set organizationdatasyncsubscriptionId(value: Organizationdatasyncsubscriptionentity | undefined) {
        this._organizationdatasyncsubscriptionId = value;
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
     * Gets the pagingcookie property value. 
     * @returns a string
     */
    public get pagingcookie() {
        return this._pagingcookie;
    };
    /**
     * Sets the pagingcookie property value. 
     * @param value Value to set for the pagingcookie property.
     */
    public set pagingcookie(value: string | undefined) {
        this._pagingcookie = value;
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
        writer.writeStringValue("_entityname_value", this._entityname_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationdatasyncsubscriptionid_value", this._organizationdatasyncsubscriptionid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("datasyncstate_AsyncOperations", this.datasyncstate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("datasyncstate_BulkDeleteFailures", this.datasyncstate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datasyncstate_DuplicateBaseRecord", this.datasyncstate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datasyncstate_DuplicateMatchingRecord", this.datasyncstate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("datasyncstate_MailboxTrackingFolders", this.datasyncstate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("datasyncstate_PrincipalObjectAttributeAccesses", this.datasyncstate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("datasyncstate_ProcessSession", this.datasyncstate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("datasyncstate_SyncErrors", this.datasyncstate_SyncErrors);
        writer.writeStringValue("datasyncstateid", this.datasyncstateid);
        writer.writeObjectValue<Organizationdatasyncsubscriptionentity>("entityname", this.entityname);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("lastdataversion", this.lastdataversion);
        writer.writeStringValue("lastmetadataversion", this.lastmetadataversion);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organizationdatasyncsubscriptionentity>("organizationdatasyncsubscriptionId", this.organizationdatasyncsubscriptionId);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("pagingcookie", this.pagingcookie);
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
