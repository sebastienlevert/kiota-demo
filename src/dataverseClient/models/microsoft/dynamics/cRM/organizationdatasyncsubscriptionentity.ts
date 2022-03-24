import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDatasyncstateFromDiscriminatorValue} from './createDatasyncstateFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationdatasyncsubscriptionFromDiscriminatorValue} from './createOrganizationdatasyncsubscriptionFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Datasyncstate, Duplicaterecord, Mailboxtrackingfolder, Organization, Organizationdatasyncsubscription, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Organizationdatasyncsubscriptionentity extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationdatasyncsubscriptioid_value?: string | undefined;
    private __organizationdatasyncsubscription_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _blobpartitionby?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _inheritsfromotc?: number | undefined;
    private _isactivity?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _objecttypecode?: number | undefined;
    private _organizationdatasyncsubscription?: Organizationdatasyncsubscription | undefined;
    private _organizationdatasyncsubscriptionentity_AsyncOperations?: Asyncoperation[] | undefined;
    private _organizationdatasyncsubscriptionentity_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _organizationdatasyncsubscriptionentity_datasyncstate_entityname?: Datasyncstate[] | undefined;
    private _organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId?: Datasyncstate[] | undefined;
    private _organizationdatasyncsubscriptionentity_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _organizationdatasyncsubscriptionentity_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _organizationdatasyncsubscriptionentity_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _organizationdatasyncsubscriptionentity_ProcessSession?: Processsession[] | undefined;
    private _organizationdatasyncsubscriptionentity_SyncErrors?: Syncerror[] | undefined;
    private _organizationdatasyncsubscriptionentityid?: string | undefined;
    private _organizationdatasyncsubscriptionId?: Organizationdatasyncsubscription | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _organizationdatasyncsubscriptioid_value property value. 
     * @returns a string
     */
    public get _organizationdatasyncsubscriptioid_value() {
        return this.__organizationdatasyncsubscriptioid_value;
    };
    /**
     * Sets the _organizationdatasyncsubscriptioid_value property value. 
     * @param value Value to set for the _organizationdatasyncsubscriptioid_value property.
     */
    public set _organizationdatasyncsubscriptioid_value(value: string | undefined) {
        this.__organizationdatasyncsubscriptioid_value = value;
    };
    /**
     * Gets the _organizationdatasyncsubscription_value property value. 
     * @returns a string
     */
    public get _organizationdatasyncsubscription_value() {
        return this.__organizationdatasyncsubscription_value;
    };
    /**
     * Sets the _organizationdatasyncsubscription_value property value. 
     * @param value Value to set for the _organizationdatasyncsubscription_value property.
     */
    public set _organizationdatasyncsubscription_value(value: string | undefined) {
        this.__organizationdatasyncsubscription_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the blobpartitionby property value. 
     * @returns a integer
     */
    public get blobpartitionby() {
        return this._blobpartitionby;
    };
    /**
     * Sets the blobpartitionby property value. 
     * @param value Value to set for the blobpartitionby property.
     */
    public set blobpartitionby(value: number | undefined) {
        this._blobpartitionby = value;
    };
    /**
     * Instantiates a new organizationdatasyncsubscriptionentity and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationdatasyncsubscriptioid_value": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity)._organizationdatasyncsubscriptioid_value = n.getStringValue(); },
            "_organizationdatasyncsubscription_value": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity)._organizationdatasyncsubscription_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity)._organizationid_value = n.getStringValue(); },
            "blobpartitionby": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).blobpartitionby = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).importsequencenumber = n.getNumberValue(); },
            "inheritsfromotc": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).inheritsfromotc = n.getNumberValue(); },
            "isactivity": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).isactivity = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).name = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).objecttypecode = n.getNumberValue(); },
            "organizationdatasyncsubscription": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscription = n.getObjectValue<Organizationdatasyncsubscription>(createOrganizationdatasyncsubscriptionFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_AsyncOperations": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_BulkDeleteFailures": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_datasyncstate_entityname": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_datasyncstate_entityname = n.getCollectionOfObjectValues<Datasyncstate>(createDatasyncstateFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId = n.getCollectionOfObjectValues<Datasyncstate>(createDatasyncstateFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_DuplicateBaseRecord": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_DuplicateMatchingRecord": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_MailboxTrackingFolders": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_ProcessSession": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentity_SyncErrors": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentity_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionentityid": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionentityid = n.getStringValue(); },
            "organizationdatasyncsubscriptionId": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationdatasyncsubscriptionId = n.getObjectValue<Organizationdatasyncsubscription>(createOrganizationdatasyncsubscriptionFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Organizationdatasyncsubscriptionentity).versionnumber = n.getNumberValue(); },
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
     * Gets the inheritsfromotc property value. 
     * @returns a integer
     */
    public get inheritsfromotc() {
        return this._inheritsfromotc;
    };
    /**
     * Sets the inheritsfromotc property value. 
     * @param value Value to set for the inheritsfromotc property.
     */
    public set inheritsfromotc(value: number | undefined) {
        this._inheritsfromotc = value;
    };
    /**
     * Gets the isactivity property value. 
     * @returns a boolean
     */
    public get isactivity() {
        return this._isactivity;
    };
    /**
     * Sets the isactivity property value. 
     * @param value Value to set for the isactivity property.
     */
    public set isactivity(value: boolean | undefined) {
        this._isactivity = value;
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
     * Gets the objecttypecode property value. 
     * @returns a integer
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: number | undefined) {
        this._objecttypecode = value;
    };
    /**
     * Gets the organizationdatasyncsubscription property value. 
     * @returns a organizationdatasyncsubscription
     */
    public get organizationdatasyncsubscription() {
        return this._organizationdatasyncsubscription;
    };
    /**
     * Sets the organizationdatasyncsubscription property value. 
     * @param value Value to set for the organizationdatasyncsubscription property.
     */
    public set organizationdatasyncsubscription(value: Organizationdatasyncsubscription | undefined) {
        this._organizationdatasyncsubscription = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get organizationdatasyncsubscriptionentity_AsyncOperations() {
        return this._organizationdatasyncsubscriptionentity_AsyncOperations;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_AsyncOperations property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_AsyncOperations property.
     */
    public set organizationdatasyncsubscriptionentity_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._organizationdatasyncsubscriptionentity_AsyncOperations = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get organizationdatasyncsubscriptionentity_BulkDeleteFailures() {
        return this._organizationdatasyncsubscriptionentity_BulkDeleteFailures;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_BulkDeleteFailures property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_BulkDeleteFailures property.
     */
    public set organizationdatasyncsubscriptionentity_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._organizationdatasyncsubscriptionentity_BulkDeleteFailures = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_datasyncstate_entityname property value. 
     * @returns a datasyncstate
     */
    public get organizationdatasyncsubscriptionentity_datasyncstate_entityname() {
        return this._organizationdatasyncsubscriptionentity_datasyncstate_entityname;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_datasyncstate_entityname property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_datasyncstate_entityname property.
     */
    public set organizationdatasyncsubscriptionentity_datasyncstate_entityname(value: Datasyncstate[] | undefined) {
        this._organizationdatasyncsubscriptionentity_datasyncstate_entityname = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId property value. 
     * @returns a datasyncstate
     */
    public get organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId() {
        return this._organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId property.
     */
    public set organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId(value: Datasyncstate[] | undefined) {
        this._organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get organizationdatasyncsubscriptionentity_DuplicateBaseRecord() {
        return this._organizationdatasyncsubscriptionentity_DuplicateBaseRecord;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_DuplicateBaseRecord property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_DuplicateBaseRecord property.
     */
    public set organizationdatasyncsubscriptionentity_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._organizationdatasyncsubscriptionentity_DuplicateBaseRecord = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get organizationdatasyncsubscriptionentity_DuplicateMatchingRecord() {
        return this._organizationdatasyncsubscriptionentity_DuplicateMatchingRecord;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_DuplicateMatchingRecord property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_DuplicateMatchingRecord property.
     */
    public set organizationdatasyncsubscriptionentity_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._organizationdatasyncsubscriptionentity_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get organizationdatasyncsubscriptionentity_MailboxTrackingFolders() {
        return this._organizationdatasyncsubscriptionentity_MailboxTrackingFolders;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_MailboxTrackingFolders property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_MailboxTrackingFolders property.
     */
    public set organizationdatasyncsubscriptionentity_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._organizationdatasyncsubscriptionentity_MailboxTrackingFolders = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses() {
        return this._organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses property.
     */
    public set organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_ProcessSession property value. 
     * @returns a processsession
     */
    public get organizationdatasyncsubscriptionentity_ProcessSession() {
        return this._organizationdatasyncsubscriptionentity_ProcessSession;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_ProcessSession property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_ProcessSession property.
     */
    public set organizationdatasyncsubscriptionentity_ProcessSession(value: Processsession[] | undefined) {
        this._organizationdatasyncsubscriptionentity_ProcessSession = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentity_SyncErrors property value. 
     * @returns a syncerror
     */
    public get organizationdatasyncsubscriptionentity_SyncErrors() {
        return this._organizationdatasyncsubscriptionentity_SyncErrors;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentity_SyncErrors property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentity_SyncErrors property.
     */
    public set organizationdatasyncsubscriptionentity_SyncErrors(value: Syncerror[] | undefined) {
        this._organizationdatasyncsubscriptionentity_SyncErrors = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionentityid property value. 
     * @returns a string
     */
    public get organizationdatasyncsubscriptionentityid() {
        return this._organizationdatasyncsubscriptionentityid;
    };
    /**
     * Sets the organizationdatasyncsubscriptionentityid property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionentityid property.
     */
    public set organizationdatasyncsubscriptionentityid(value: string | undefined) {
        this._organizationdatasyncsubscriptionentityid = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionId property value. 
     * @returns a organizationdatasyncsubscription
     */
    public get organizationdatasyncsubscriptionId() {
        return this._organizationdatasyncsubscriptionId;
    };
    /**
     * Sets the organizationdatasyncsubscriptionId property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionId property.
     */
    public set organizationdatasyncsubscriptionId(value: Organizationdatasyncsubscription | undefined) {
        this._organizationdatasyncsubscriptionId = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
        writer.writeStringValue("_organizationdatasyncsubscriptioid_value", this._organizationdatasyncsubscriptioid_value);
        writer.writeStringValue("_organizationdatasyncsubscription_value", this._organizationdatasyncsubscription_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("blobpartitionby", this.blobpartitionby);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("inheritsfromotc", this.inheritsfromotc);
        writer.writeBooleanValue("isactivity", this.isactivity);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("objecttypecode", this.objecttypecode);
        writer.writeObjectValue<Organizationdatasyncsubscription>("organizationdatasyncsubscription", this.organizationdatasyncsubscription);
        writer.writeCollectionOfObjectValues<Asyncoperation>("organizationdatasyncsubscriptionentity_AsyncOperations", this.organizationdatasyncsubscriptionentity_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("organizationdatasyncsubscriptionentity_BulkDeleteFailures", this.organizationdatasyncsubscriptionentity_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Datasyncstate>("organizationdatasyncsubscriptionentity_datasyncstate_entityname", this.organizationdatasyncsubscriptionentity_datasyncstate_entityname);
        writer.writeCollectionOfObjectValues<Datasyncstate>("organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId", this.organizationdatasyncsubscriptionentity_datasyncstate_organizationdatasyncsubscriptionId);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("organizationdatasyncsubscriptionentity_DuplicateBaseRecord", this.organizationdatasyncsubscriptionentity_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("organizationdatasyncsubscriptionentity_DuplicateMatchingRecord", this.organizationdatasyncsubscriptionentity_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("organizationdatasyncsubscriptionentity_MailboxTrackingFolders", this.organizationdatasyncsubscriptionentity_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses", this.organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("organizationdatasyncsubscriptionentity_ProcessSession", this.organizationdatasyncsubscriptionentity_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("organizationdatasyncsubscriptionentity_SyncErrors", this.organizationdatasyncsubscriptionentity_SyncErrors);
        writer.writeStringValue("organizationdatasyncsubscriptionentityid", this.organizationdatasyncsubscriptionentityid);
        writer.writeObjectValue<Organizationdatasyncsubscription>("organizationdatasyncsubscriptionId", this.organizationdatasyncsubscriptionId);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
