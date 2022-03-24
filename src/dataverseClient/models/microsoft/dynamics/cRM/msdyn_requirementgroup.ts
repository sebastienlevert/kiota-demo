import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_incidenttype_requirementgroupFromDiscriminatorValue} from './createMsdyn_incidenttype_requirementgroupFromDiscriminatorValue';
import {createMsdyn_requirementgroupFromDiscriminatorValue} from './createMsdyn_requirementgroupFromDiscriminatorValue';
import {createMsdyn_requirementrelationshipFromDiscriminatorValue} from './createMsdyn_requirementrelationshipFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bookableresourcebooking, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_incidenttype_requirementgroup, Msdyn_requirementrelationship, Msdyn_resourcerequirement, Principal, Principalobjectattributeaccess, Processsession, Service, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_requirementgroup extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_requirementgrouptemplateid_value?: string | undefined;
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
    private _msdyn_autogrouptype?: number | undefined;
    private _msdyn_istemplate?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_requirementgroup_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_requirementgroup_bookableresourcebooking_requirementgroupid?: Bookableresourcebooking[] | undefined;
    private _msdyn_requirementgroup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_requirementgroup_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_requirementgroup_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_requirementgroup_incidenttype_reqgroup?: Msdyn_incidenttype_requirementgroup[] | undefined;
    private _msdyn_requirementgroup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_requirementgroup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_requirementgroup_ProcessSession?: Processsession[] | undefined;
    private _msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid?: Msdyn_requirementgroup[] | undefined;
    private _msdyn_requirementgroup_requirementrelationship_requirementgroupid?: Msdyn_requirementrelationship[] | undefined;
    private _msdyn_requirementgroup_resourcerequirement_requirementgroupid?: Msdyn_resourcerequirement[] | undefined;
    private _msdyn_requirementgroup_service?: Service[] | undefined;
    private _msdyn_requirementgroup_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_requirementgroupid?: string | undefined;
    private _msdyn_requirementgrouptemplateid?: Msdyn_requirementgroup | undefined;
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
     * Gets the _msdyn_requirementgrouptemplateid_value property value. 
     * @returns a string
     */
    public get _msdyn_requirementgrouptemplateid_value() {
        return this.__msdyn_requirementgrouptemplateid_value;
    };
    /**
     * Sets the _msdyn_requirementgrouptemplateid_value property value. 
     * @param value Value to set for the _msdyn_requirementgrouptemplateid_value property.
     */
    public set _msdyn_requirementgrouptemplateid_value(value: string | undefined) {
        this.__msdyn_requirementgrouptemplateid_value = value;
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
     * Instantiates a new msdyn_requirementgroup and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_requirementgrouptemplateid_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._msdyn_requirementgrouptemplateid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_requirementgroup)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_requirementgroup).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_requirementgroup).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_requirementgroup).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_requirementgroup).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_requirementgroup).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_requirementgroup).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_requirementgroup).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_autogrouptype": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_autogrouptype = n.getNumberValue(); },
            "msdyn_istemplate": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_istemplate = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_name = n.getStringValue(); },
            "msdyn_requirementgroup_AsyncOperations": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_requirementgroup_bookableresourcebooking_requirementgroupid": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_bookableresourcebooking_requirementgroupid = n.getCollectionOfObjectValues<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_requirementgroup_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_requirementgroup_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_requirementgroup_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_requirementgroup_incidenttype_reqgroup": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_incidenttype_reqgroup = n.getCollectionOfObjectValues<Msdyn_incidenttype_requirementgroup>(createMsdyn_incidenttype_requirementgroupFromDiscriminatorValue); },
            "msdyn_requirementgroup_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_requirementgroup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_requirementgroup_ProcessSession": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid = n.getCollectionOfObjectValues<Msdyn_requirementgroup>(createMsdyn_requirementgroupFromDiscriminatorValue); },
            "msdyn_requirementgroup_requirementrelationship_requirementgroupid": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_requirementrelationship_requirementgroupid = n.getCollectionOfObjectValues<Msdyn_requirementrelationship>(createMsdyn_requirementrelationshipFromDiscriminatorValue); },
            "msdyn_requirementgroup_resourcerequirement_requirementgroupid": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_resourcerequirement_requirementgroupid = n.getCollectionOfObjectValues<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_requirementgroup_service": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_service = n.getCollectionOfObjectValues<Service>(createServiceFromDiscriminatorValue); },
            "msdyn_requirementgroup_SyncErrors": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_requirementgroupid": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgroupid = n.getStringValue(); },
            "msdyn_requirementgrouptemplateid": (o, n) => { (o as unknown as Msdyn_requirementgroup).msdyn_requirementgrouptemplateid = n.getObjectValue<Msdyn_requirementgroup>(createMsdyn_requirementgroupFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_requirementgroup).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_requirementgroup).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_requirementgroup).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_requirementgroup).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_requirementgroup).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_requirementgroup).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_requirementgroup).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_requirementgroup).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_requirementgroup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_requirementgroup).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_autogrouptype property value. 
     * @returns a integer
     */
    public get msdyn_autogrouptype() {
        return this._msdyn_autogrouptype;
    };
    /**
     * Sets the msdyn_autogrouptype property value. 
     * @param value Value to set for the msdyn_autogrouptype property.
     */
    public set msdyn_autogrouptype(value: number | undefined) {
        this._msdyn_autogrouptype = value;
    };
    /**
     * Gets the msdyn_istemplate property value. 
     * @returns a boolean
     */
    public get msdyn_istemplate() {
        return this._msdyn_istemplate;
    };
    /**
     * Sets the msdyn_istemplate property value. 
     * @param value Value to set for the msdyn_istemplate property.
     */
    public set msdyn_istemplate(value: boolean | undefined) {
        this._msdyn_istemplate = value;
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
     * Gets the msdyn_requirementgroup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_requirementgroup_AsyncOperations() {
        return this._msdyn_requirementgroup_AsyncOperations;
    };
    /**
     * Sets the msdyn_requirementgroup_AsyncOperations property value. 
     * @param value Value to set for the msdyn_requirementgroup_AsyncOperations property.
     */
    public set msdyn_requirementgroup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_requirementgroup_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_requirementgroup_bookableresourcebooking_requirementgroupid property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_requirementgroup_bookableresourcebooking_requirementgroupid() {
        return this._msdyn_requirementgroup_bookableresourcebooking_requirementgroupid;
    };
    /**
     * Sets the msdyn_requirementgroup_bookableresourcebooking_requirementgroupid property value. 
     * @param value Value to set for the msdyn_requirementgroup_bookableresourcebooking_requirementgroupid property.
     */
    public set msdyn_requirementgroup_bookableresourcebooking_requirementgroupid(value: Bookableresourcebooking[] | undefined) {
        this._msdyn_requirementgroup_bookableresourcebooking_requirementgroupid = value;
    };
    /**
     * Gets the msdyn_requirementgroup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_requirementgroup_BulkDeleteFailures() {
        return this._msdyn_requirementgroup_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_requirementgroup_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_requirementgroup_BulkDeleteFailures property.
     */
    public set msdyn_requirementgroup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_requirementgroup_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_requirementgroup_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_requirementgroup_DuplicateBaseRecord() {
        return this._msdyn_requirementgroup_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_requirementgroup_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_requirementgroup_DuplicateBaseRecord property.
     */
    public set msdyn_requirementgroup_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_requirementgroup_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_requirementgroup_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_requirementgroup_DuplicateMatchingRecord() {
        return this._msdyn_requirementgroup_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_requirementgroup_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_requirementgroup_DuplicateMatchingRecord property.
     */
    public set msdyn_requirementgroup_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_requirementgroup_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_requirementgroup_incidenttype_reqgroup property value. 
     * @returns a msdyn_incidenttype_requirementgroup
     */
    public get msdyn_requirementgroup_incidenttype_reqgroup() {
        return this._msdyn_requirementgroup_incidenttype_reqgroup;
    };
    /**
     * Sets the msdyn_requirementgroup_incidenttype_reqgroup property value. 
     * @param value Value to set for the msdyn_requirementgroup_incidenttype_reqgroup property.
     */
    public set msdyn_requirementgroup_incidenttype_reqgroup(value: Msdyn_incidenttype_requirementgroup[] | undefined) {
        this._msdyn_requirementgroup_incidenttype_reqgroup = value;
    };
    /**
     * Gets the msdyn_requirementgroup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_requirementgroup_MailboxTrackingFolders() {
        return this._msdyn_requirementgroup_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_requirementgroup_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_requirementgroup_MailboxTrackingFolders property.
     */
    public set msdyn_requirementgroup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_requirementgroup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_requirementgroup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_requirementgroup_PrincipalObjectAttributeAccesses() {
        return this._msdyn_requirementgroup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_requirementgroup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_requirementgroup_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_requirementgroup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_requirementgroup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_requirementgroup_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_requirementgroup_ProcessSession() {
        return this._msdyn_requirementgroup_ProcessSession;
    };
    /**
     * Sets the msdyn_requirementgroup_ProcessSession property value. 
     * @param value Value to set for the msdyn_requirementgroup_ProcessSession property.
     */
    public set msdyn_requirementgroup_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_requirementgroup_ProcessSession = value;
    };
    /**
     * Gets the msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid property value. 
     * @returns a msdyn_requirementgroup
     */
    public get msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid() {
        return this._msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid;
    };
    /**
     * Sets the msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid property value. 
     * @param value Value to set for the msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid property.
     */
    public set msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid(value: Msdyn_requirementgroup[] | undefined) {
        this._msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid = value;
    };
    /**
     * Gets the msdyn_requirementgroup_requirementrelationship_requirementgroupid property value. 
     * @returns a msdyn_requirementrelationship
     */
    public get msdyn_requirementgroup_requirementrelationship_requirementgroupid() {
        return this._msdyn_requirementgroup_requirementrelationship_requirementgroupid;
    };
    /**
     * Sets the msdyn_requirementgroup_requirementrelationship_requirementgroupid property value. 
     * @param value Value to set for the msdyn_requirementgroup_requirementrelationship_requirementgroupid property.
     */
    public set msdyn_requirementgroup_requirementrelationship_requirementgroupid(value: Msdyn_requirementrelationship[] | undefined) {
        this._msdyn_requirementgroup_requirementrelationship_requirementgroupid = value;
    };
    /**
     * Gets the msdyn_requirementgroup_resourcerequirement_requirementgroupid property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_requirementgroup_resourcerequirement_requirementgroupid() {
        return this._msdyn_requirementgroup_resourcerequirement_requirementgroupid;
    };
    /**
     * Sets the msdyn_requirementgroup_resourcerequirement_requirementgroupid property value. 
     * @param value Value to set for the msdyn_requirementgroup_resourcerequirement_requirementgroupid property.
     */
    public set msdyn_requirementgroup_resourcerequirement_requirementgroupid(value: Msdyn_resourcerequirement[] | undefined) {
        this._msdyn_requirementgroup_resourcerequirement_requirementgroupid = value;
    };
    /**
     * Gets the msdyn_requirementgroup_service property value. 
     * @returns a service
     */
    public get msdyn_requirementgroup_service() {
        return this._msdyn_requirementgroup_service;
    };
    /**
     * Sets the msdyn_requirementgroup_service property value. 
     * @param value Value to set for the msdyn_requirementgroup_service property.
     */
    public set msdyn_requirementgroup_service(value: Service[] | undefined) {
        this._msdyn_requirementgroup_service = value;
    };
    /**
     * Gets the msdyn_requirementgroup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_requirementgroup_SyncErrors() {
        return this._msdyn_requirementgroup_SyncErrors;
    };
    /**
     * Sets the msdyn_requirementgroup_SyncErrors property value. 
     * @param value Value to set for the msdyn_requirementgroup_SyncErrors property.
     */
    public set msdyn_requirementgroup_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_requirementgroup_SyncErrors = value;
    };
    /**
     * Gets the msdyn_requirementgroupid property value. 
     * @returns a string
     */
    public get msdyn_requirementgroupid() {
        return this._msdyn_requirementgroupid;
    };
    /**
     * Sets the msdyn_requirementgroupid property value. 
     * @param value Value to set for the msdyn_requirementgroupid property.
     */
    public set msdyn_requirementgroupid(value: string | undefined) {
        this._msdyn_requirementgroupid = value;
    };
    /**
     * Gets the msdyn_requirementgrouptemplateid property value. 
     * @returns a msdyn_requirementgroup
     */
    public get msdyn_requirementgrouptemplateid() {
        return this._msdyn_requirementgrouptemplateid;
    };
    /**
     * Sets the msdyn_requirementgrouptemplateid property value. 
     * @param value Value to set for the msdyn_requirementgrouptemplateid property.
     */
    public set msdyn_requirementgrouptemplateid(value: Msdyn_requirementgroup | undefined) {
        this._msdyn_requirementgrouptemplateid = value;
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
        writer.writeStringValue("_msdyn_requirementgrouptemplateid_value", this._msdyn_requirementgrouptemplateid_value);
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
        writer.writeNumberValue("msdyn_autogrouptype", this.msdyn_autogrouptype);
        writer.writeBooleanValue("msdyn_istemplate", this.msdyn_istemplate);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_requirementgroup_AsyncOperations", this.msdyn_requirementgroup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bookableresourcebooking>("msdyn_requirementgroup_bookableresourcebooking_requirementgroupid", this.msdyn_requirementgroup_bookableresourcebooking_requirementgroupid);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_requirementgroup_BulkDeleteFailures", this.msdyn_requirementgroup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_requirementgroup_DuplicateBaseRecord", this.msdyn_requirementgroup_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_requirementgroup_DuplicateMatchingRecord", this.msdyn_requirementgroup_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttype_requirementgroup>("msdyn_requirementgroup_incidenttype_reqgroup", this.msdyn_requirementgroup_incidenttype_reqgroup);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_requirementgroup_MailboxTrackingFolders", this.msdyn_requirementgroup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_requirementgroup_PrincipalObjectAttributeAccesses", this.msdyn_requirementgroup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_requirementgroup_ProcessSession", this.msdyn_requirementgroup_ProcessSession);
        writer.writeCollectionOfObjectValues<Msdyn_requirementgroup>("msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid", this.msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid);
        writer.writeCollectionOfObjectValues<Msdyn_requirementrelationship>("msdyn_requirementgroup_requirementrelationship_requirementgroupid", this.msdyn_requirementgroup_requirementrelationship_requirementgroupid);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequirement>("msdyn_requirementgroup_resourcerequirement_requirementgroupid", this.msdyn_requirementgroup_resourcerequirement_requirementgroupid);
        writer.writeCollectionOfObjectValues<Service>("msdyn_requirementgroup_service", this.msdyn_requirementgroup_service);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_requirementgroup_SyncErrors", this.msdyn_requirementgroup_SyncErrors);
        writer.writeStringValue("msdyn_requirementgroupid", this.msdyn_requirementgroupid);
        writer.writeObjectValue<Msdyn_requirementgroup>("msdyn_requirementgrouptemplateid", this.msdyn_requirementgrouptemplateid);
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
