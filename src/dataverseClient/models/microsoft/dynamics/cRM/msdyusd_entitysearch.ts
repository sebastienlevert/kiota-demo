import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyusd_configurationFromDiscriminatorValue} from './createMsdyusd_configurationFromDiscriminatorValue';
import {createMsdyusd_entityassignmentFromDiscriminatorValue} from './createMsdyusd_entityassignmentFromDiscriminatorValue';
import {createMsdyusd_windowrouteFromDiscriminatorValue} from './createMsdyusd_windowrouteFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyusd_configuration, Msdyusd_entityassignment, Msdyusd_windowroute, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyusd_entitysearch extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyusd_entity_value?: string | undefined;
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
    private _msdyusd_configuration_entitysearch?: Msdyusd_configuration[] | undefined;
    private _msdyusd_Entity?: Msdyusd_entityassignment | undefined;
    private _msdyusd_entitysearch_Annotations?: Annotation[] | undefined;
    private _msdyusd_entitysearch_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyusd_entitysearch_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyusd_entitysearch_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyusd_entitysearch_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyusd_entitysearch_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyusd_entitysearch_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyusd_entitysearch_ProcessSession?: Processsession[] | undefined;
    private _msdyusd_entitysearch_SyncErrors?: Syncerror[] | undefined;
    private _msdyusd_entitysearch_windowroute_EntitySearch?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_entitysearch_windowroute_FromSearch?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_entitysearchid?: string | undefined;
    private _msdyusd_fetchxml?: string | undefined;
    private _msdyusd_name?: string | undefined;
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
     * Gets the _msdyusd_entity_value property value. 
     * @returns a string
     */
    public get _msdyusd_entity_value() {
        return this.__msdyusd_entity_value;
    };
    /**
     * Sets the _msdyusd_entity_value property value. 
     * @param value Value to set for the _msdyusd_entity_value property.
     */
    public set _msdyusd_entity_value(value: string | undefined) {
        this.__msdyusd_entity_value = value;
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
     * Instantiates a new msdyusd_entitysearch and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyusd_entity_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._msdyusd_entity_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyusd_entitysearch)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyusd_entitysearch).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyusd_entitysearch).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyusd_entitysearch).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyusd_entitysearch).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyusd_entitysearch).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyusd_entitysearch).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyusd_entitysearch).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_configuration_entitysearch": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_configuration_entitysearch = n.getCollectionOfObjectValues<Msdyusd_configuration>(createMsdyusd_configurationFromDiscriminatorValue); },
            "msdyusd_Entity": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_Entity = n.getObjectValue<Msdyusd_entityassignment>(createMsdyusd_entityassignmentFromDiscriminatorValue); },
            "msdyusd_entitysearch_Annotations": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyusd_entitysearch_AsyncOperations": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyusd_entitysearch_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyusd_entitysearch_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyusd_entitysearch_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyusd_entitysearch_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyusd_entitysearch_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyusd_entitysearch_ProcessSession": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyusd_entitysearch_SyncErrors": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyusd_entitysearch_windowroute_EntitySearch": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_windowroute_EntitySearch = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_entitysearch_windowroute_FromSearch": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearch_windowroute_FromSearch = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_entitysearchid": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_entitysearchid = n.getStringValue(); },
            "msdyusd_fetchxml": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_fetchxml = n.getStringValue(); },
            "msdyusd_name": (o, n) => { (o as unknown as Msdyusd_entitysearch).msdyusd_name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyusd_entitysearch).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyusd_entitysearch).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyusd_entitysearch).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyusd_entitysearch).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyusd_entitysearch).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyusd_entitysearch).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyusd_entitysearch).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyusd_entitysearch).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyusd_entitysearch).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyusd_entitysearch).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyusd_configuration_entitysearch property value. 
     * @returns a msdyusd_configuration
     */
    public get msdyusd_configuration_entitysearch() {
        return this._msdyusd_configuration_entitysearch;
    };
    /**
     * Sets the msdyusd_configuration_entitysearch property value. 
     * @param value Value to set for the msdyusd_configuration_entitysearch property.
     */
    public set msdyusd_configuration_entitysearch(value: Msdyusd_configuration[] | undefined) {
        this._msdyusd_configuration_entitysearch = value;
    };
    /**
     * Gets the msdyusd_Entity property value. 
     * @returns a msdyusd_entityassignment
     */
    public get msdyusd_Entity() {
        return this._msdyusd_Entity;
    };
    /**
     * Sets the msdyusd_Entity property value. 
     * @param value Value to set for the msdyusd_Entity property.
     */
    public set msdyusd_Entity(value: Msdyusd_entityassignment | undefined) {
        this._msdyusd_Entity = value;
    };
    /**
     * Gets the msdyusd_entitysearch_Annotations property value. 
     * @returns a annotation
     */
    public get msdyusd_entitysearch_Annotations() {
        return this._msdyusd_entitysearch_Annotations;
    };
    /**
     * Sets the msdyusd_entitysearch_Annotations property value. 
     * @param value Value to set for the msdyusd_entitysearch_Annotations property.
     */
    public set msdyusd_entitysearch_Annotations(value: Annotation[] | undefined) {
        this._msdyusd_entitysearch_Annotations = value;
    };
    /**
     * Gets the msdyusd_entitysearch_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyusd_entitysearch_AsyncOperations() {
        return this._msdyusd_entitysearch_AsyncOperations;
    };
    /**
     * Sets the msdyusd_entitysearch_AsyncOperations property value. 
     * @param value Value to set for the msdyusd_entitysearch_AsyncOperations property.
     */
    public set msdyusd_entitysearch_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyusd_entitysearch_AsyncOperations = value;
    };
    /**
     * Gets the msdyusd_entitysearch_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyusd_entitysearch_BulkDeleteFailures() {
        return this._msdyusd_entitysearch_BulkDeleteFailures;
    };
    /**
     * Sets the msdyusd_entitysearch_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyusd_entitysearch_BulkDeleteFailures property.
     */
    public set msdyusd_entitysearch_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyusd_entitysearch_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyusd_entitysearch_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyusd_entitysearch_DuplicateBaseRecord() {
        return this._msdyusd_entitysearch_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyusd_entitysearch_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyusd_entitysearch_DuplicateBaseRecord property.
     */
    public set msdyusd_entitysearch_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyusd_entitysearch_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyusd_entitysearch_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyusd_entitysearch_DuplicateMatchingRecord() {
        return this._msdyusd_entitysearch_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyusd_entitysearch_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyusd_entitysearch_DuplicateMatchingRecord property.
     */
    public set msdyusd_entitysearch_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyusd_entitysearch_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyusd_entitysearch_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyusd_entitysearch_MailboxTrackingFolders() {
        return this._msdyusd_entitysearch_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyusd_entitysearch_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyusd_entitysearch_MailboxTrackingFolders property.
     */
    public set msdyusd_entitysearch_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyusd_entitysearch_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyusd_entitysearch_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyusd_entitysearch_PrincipalObjectAttributeAccesses() {
        return this._msdyusd_entitysearch_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyusd_entitysearch_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyusd_entitysearch_PrincipalObjectAttributeAccesses property.
     */
    public set msdyusd_entitysearch_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyusd_entitysearch_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyusd_entitysearch_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyusd_entitysearch_ProcessSession() {
        return this._msdyusd_entitysearch_ProcessSession;
    };
    /**
     * Sets the msdyusd_entitysearch_ProcessSession property value. 
     * @param value Value to set for the msdyusd_entitysearch_ProcessSession property.
     */
    public set msdyusd_entitysearch_ProcessSession(value: Processsession[] | undefined) {
        this._msdyusd_entitysearch_ProcessSession = value;
    };
    /**
     * Gets the msdyusd_entitysearch_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyusd_entitysearch_SyncErrors() {
        return this._msdyusd_entitysearch_SyncErrors;
    };
    /**
     * Sets the msdyusd_entitysearch_SyncErrors property value. 
     * @param value Value to set for the msdyusd_entitysearch_SyncErrors property.
     */
    public set msdyusd_entitysearch_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyusd_entitysearch_SyncErrors = value;
    };
    /**
     * Gets the msdyusd_entitysearch_windowroute_EntitySearch property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_entitysearch_windowroute_EntitySearch() {
        return this._msdyusd_entitysearch_windowroute_EntitySearch;
    };
    /**
     * Sets the msdyusd_entitysearch_windowroute_EntitySearch property value. 
     * @param value Value to set for the msdyusd_entitysearch_windowroute_EntitySearch property.
     */
    public set msdyusd_entitysearch_windowroute_EntitySearch(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_entitysearch_windowroute_EntitySearch = value;
    };
    /**
     * Gets the msdyusd_entitysearch_windowroute_FromSearch property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_entitysearch_windowroute_FromSearch() {
        return this._msdyusd_entitysearch_windowroute_FromSearch;
    };
    /**
     * Sets the msdyusd_entitysearch_windowroute_FromSearch property value. 
     * @param value Value to set for the msdyusd_entitysearch_windowroute_FromSearch property.
     */
    public set msdyusd_entitysearch_windowroute_FromSearch(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_entitysearch_windowroute_FromSearch = value;
    };
    /**
     * Gets the msdyusd_entitysearchid property value. 
     * @returns a string
     */
    public get msdyusd_entitysearchid() {
        return this._msdyusd_entitysearchid;
    };
    /**
     * Sets the msdyusd_entitysearchid property value. 
     * @param value Value to set for the msdyusd_entitysearchid property.
     */
    public set msdyusd_entitysearchid(value: string | undefined) {
        this._msdyusd_entitysearchid = value;
    };
    /**
     * Gets the msdyusd_fetchxml property value. 
     * @returns a string
     */
    public get msdyusd_fetchxml() {
        return this._msdyusd_fetchxml;
    };
    /**
     * Sets the msdyusd_fetchxml property value. 
     * @param value Value to set for the msdyusd_fetchxml property.
     */
    public set msdyusd_fetchxml(value: string | undefined) {
        this._msdyusd_fetchxml = value;
    };
    /**
     * Gets the msdyusd_name property value. 
     * @returns a string
     */
    public get msdyusd_name() {
        return this._msdyusd_name;
    };
    /**
     * Sets the msdyusd_name property value. 
     * @param value Value to set for the msdyusd_name property.
     */
    public set msdyusd_name(value: string | undefined) {
        this._msdyusd_name = value;
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
        writer.writeStringValue("_msdyusd_entity_value", this._msdyusd_entity_value);
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
        writer.writeCollectionOfObjectValues<Msdyusd_configuration>("msdyusd_configuration_entitysearch", this.msdyusd_configuration_entitysearch);
        writer.writeObjectValue<Msdyusd_entityassignment>("msdyusd_Entity", this.msdyusd_Entity);
        writer.writeCollectionOfObjectValues<Annotation>("msdyusd_entitysearch_Annotations", this.msdyusd_entitysearch_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyusd_entitysearch_AsyncOperations", this.msdyusd_entitysearch_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyusd_entitysearch_BulkDeleteFailures", this.msdyusd_entitysearch_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyusd_entitysearch_DuplicateBaseRecord", this.msdyusd_entitysearch_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyusd_entitysearch_DuplicateMatchingRecord", this.msdyusd_entitysearch_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyusd_entitysearch_MailboxTrackingFolders", this.msdyusd_entitysearch_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyusd_entitysearch_PrincipalObjectAttributeAccesses", this.msdyusd_entitysearch_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyusd_entitysearch_ProcessSession", this.msdyusd_entitysearch_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyusd_entitysearch_SyncErrors", this.msdyusd_entitysearch_SyncErrors);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_entitysearch_windowroute_EntitySearch", this.msdyusd_entitysearch_windowroute_EntitySearch);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_entitysearch_windowroute_FromSearch", this.msdyusd_entitysearch_windowroute_FromSearch);
        writer.writeStringValue("msdyusd_entitysearchid", this.msdyusd_entitysearchid);
        writer.writeStringValue("msdyusd_fetchxml", this.msdyusd_fetchxml);
        writer.writeStringValue("msdyusd_name", this.msdyusd_name);
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
