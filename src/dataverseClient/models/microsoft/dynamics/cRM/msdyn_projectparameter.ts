import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_invoicefrequencyFromDiscriminatorValue} from './createMsdyn_invoicefrequencyFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_projectparameterpricelistFromDiscriminatorValue} from './createMsdyn_projectparameterpricelistFromDiscriminatorValue';
import {createMsdyn_workhourtemplateFromDiscriminatorValue} from './createMsdyn_workhourtemplateFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresourcecategory, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_invoicefrequency, Msdyn_organizationalunit, Msdyn_projectparameterpricelist, Msdyn_workhourtemplate, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_projectparameter extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_defaultorganizationalunit_value?: string | undefined;
    private __msdyn_defaultworktemplate_value?: string | undefined;
    private __msdyn_invoicefrequency_value?: string | undefined;
    private __msdyn_projectmanagerrole_value?: string | undefined;
    private __msdyn_teammemberrole_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_allowskillupdatebyresource?: boolean | undefined;
    private _msdyn_backgroundapprovalthreshold?: number | undefined;
    private _msdyn_defaultorganizationalunit?: Msdyn_organizationalunit | undefined;
    private _msdyn_defaultWorkTemplate?: Msdyn_workhourtemplate | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_invoicefrequency?: Msdyn_invoicefrequency | undefined;
    private _msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter?: Msdyn_projectparameterpricelist[] | undefined;
    private _msdyn_pricelistdefaultingiscurrencyagnostic?: boolean | undefined;
    private _msdyn_projectmanagerrole?: Bookableresourcecategory | undefined;
    private _msdyn_projectparameter_Annotations?: Annotation[] | undefined;
    private _msdyn_projectparameter_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_projectparameter_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_projectparameter_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projectparameter_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projectparameter_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_projectparameter_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_projectparameter_ProcessSession?: Processsession[] | undefined;
    private _msdyn_projectparameter_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_projectparameterid?: string | undefined;
    private _msdyn_projectresourcerequirementsvisibletore?: boolean | undefined;
    private _msdyn_resourceallocationmode?: number | undefined;
    private _msdyn_teammemberrole?: Bookableresourcecategory | undefined;
    private _msdyn_upgradebatchsize?: number | undefined;
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
     * Gets the _msdyn_defaultorganizationalunit_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultorganizationalunit_value() {
        return this.__msdyn_defaultorganizationalunit_value;
    };
    /**
     * Sets the _msdyn_defaultorganizationalunit_value property value. 
     * @param value Value to set for the _msdyn_defaultorganizationalunit_value property.
     */
    public set _msdyn_defaultorganizationalunit_value(value: string | undefined) {
        this.__msdyn_defaultorganizationalunit_value = value;
    };
    /**
     * Gets the _msdyn_defaultworktemplate_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultworktemplate_value() {
        return this.__msdyn_defaultworktemplate_value;
    };
    /**
     * Sets the _msdyn_defaultworktemplate_value property value. 
     * @param value Value to set for the _msdyn_defaultworktemplate_value property.
     */
    public set _msdyn_defaultworktemplate_value(value: string | undefined) {
        this.__msdyn_defaultworktemplate_value = value;
    };
    /**
     * Gets the _msdyn_invoicefrequency_value property value. 
     * @returns a string
     */
    public get _msdyn_invoicefrequency_value() {
        return this.__msdyn_invoicefrequency_value;
    };
    /**
     * Sets the _msdyn_invoicefrequency_value property value. 
     * @param value Value to set for the _msdyn_invoicefrequency_value property.
     */
    public set _msdyn_invoicefrequency_value(value: string | undefined) {
        this.__msdyn_invoicefrequency_value = value;
    };
    /**
     * Gets the _msdyn_projectmanagerrole_value property value. 
     * @returns a string
     */
    public get _msdyn_projectmanagerrole_value() {
        return this.__msdyn_projectmanagerrole_value;
    };
    /**
     * Sets the _msdyn_projectmanagerrole_value property value. 
     * @param value Value to set for the _msdyn_projectmanagerrole_value property.
     */
    public set _msdyn_projectmanagerrole_value(value: string | undefined) {
        this.__msdyn_projectmanagerrole_value = value;
    };
    /**
     * Gets the _msdyn_teammemberrole_value property value. 
     * @returns a string
     */
    public get _msdyn_teammemberrole_value() {
        return this.__msdyn_teammemberrole_value;
    };
    /**
     * Sets the _msdyn_teammemberrole_value property value. 
     * @param value Value to set for the _msdyn_teammemberrole_value property.
     */
    public set _msdyn_teammemberrole_value(value: string | undefined) {
        this.__msdyn_teammemberrole_value = value;
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
     * Instantiates a new msdyn_projectparameter and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_defaultorganizationalunit_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._msdyn_defaultorganizationalunit_value = n.getStringValue(); },
            "_msdyn_defaultworktemplate_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._msdyn_defaultworktemplate_value = n.getStringValue(); },
            "_msdyn_invoicefrequency_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._msdyn_invoicefrequency_value = n.getStringValue(); },
            "_msdyn_projectmanagerrole_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._msdyn_projectmanagerrole_value = n.getStringValue(); },
            "_msdyn_teammemberrole_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._msdyn_teammemberrole_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_projectparameter)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_projectparameter).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_projectparameter).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_projectparameter).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_projectparameter).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_projectparameter).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_projectparameter).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_projectparameter).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_allowskillupdatebyresource": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_allowskillupdatebyresource = n.getBooleanValue(); },
            "msdyn_backgroundapprovalthreshold": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_backgroundapprovalthreshold = n.getNumberValue(); },
            "msdyn_defaultorganizationalunit": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_defaultorganizationalunit = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_defaultWorkTemplate": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_defaultWorkTemplate = n.getObjectValue<Msdyn_workhourtemplate>(createMsdyn_workhourtemplateFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_description = n.getStringValue(); },
            "msdyn_invoicefrequency": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_invoicefrequency = n.getObjectValue<Msdyn_invoicefrequency>(createMsdyn_invoicefrequencyFromDiscriminatorValue); },
            "msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter = n.getCollectionOfObjectValues<Msdyn_projectparameterpricelist>(createMsdyn_projectparameterpricelistFromDiscriminatorValue); },
            "msdyn_pricelistdefaultingiscurrencyagnostic": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_pricelistdefaultingiscurrencyagnostic = n.getBooleanValue(); },
            "msdyn_projectmanagerrole": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectmanagerrole = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_projectparameter_Annotations": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_projectparameter_AsyncOperations": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_projectparameter_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_projectparameter_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projectparameter_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projectparameter_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_projectparameter_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_projectparameter_ProcessSession": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_projectparameter_SyncErrors": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameter_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_projectparameterid": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectparameterid = n.getStringValue(); },
            "msdyn_projectresourcerequirementsvisibletore": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_projectresourcerequirementsvisibletore = n.getBooleanValue(); },
            "msdyn_resourceallocationmode": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_resourceallocationmode = n.getNumberValue(); },
            "msdyn_teammemberrole": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_teammemberrole = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_upgradebatchsize": (o, n) => { (o as unknown as Msdyn_projectparameter).msdyn_upgradebatchsize = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_projectparameter).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_projectparameter).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_projectparameter).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_projectparameter).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_projectparameter).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_projectparameter).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_projectparameter).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_allowskillupdatebyresource property value. 
     * @returns a boolean
     */
    public get msdyn_allowskillupdatebyresource() {
        return this._msdyn_allowskillupdatebyresource;
    };
    /**
     * Sets the msdyn_allowskillupdatebyresource property value. 
     * @param value Value to set for the msdyn_allowskillupdatebyresource property.
     */
    public set msdyn_allowskillupdatebyresource(value: boolean | undefined) {
        this._msdyn_allowskillupdatebyresource = value;
    };
    /**
     * Gets the msdyn_backgroundapprovalthreshold property value. 
     * @returns a integer
     */
    public get msdyn_backgroundapprovalthreshold() {
        return this._msdyn_backgroundapprovalthreshold;
    };
    /**
     * Sets the msdyn_backgroundapprovalthreshold property value. 
     * @param value Value to set for the msdyn_backgroundapprovalthreshold property.
     */
    public set msdyn_backgroundapprovalthreshold(value: number | undefined) {
        this._msdyn_backgroundapprovalthreshold = value;
    };
    /**
     * Gets the msdyn_defaultorganizationalunit property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_defaultorganizationalunit() {
        return this._msdyn_defaultorganizationalunit;
    };
    /**
     * Sets the msdyn_defaultorganizationalunit property value. 
     * @param value Value to set for the msdyn_defaultorganizationalunit property.
     */
    public set msdyn_defaultorganizationalunit(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_defaultorganizationalunit = value;
    };
    /**
     * Gets the msdyn_defaultWorkTemplate property value. 
     * @returns a msdyn_workhourtemplate
     */
    public get msdyn_defaultWorkTemplate() {
        return this._msdyn_defaultWorkTemplate;
    };
    /**
     * Sets the msdyn_defaultWorkTemplate property value. 
     * @param value Value to set for the msdyn_defaultWorkTemplate property.
     */
    public set msdyn_defaultWorkTemplate(value: Msdyn_workhourtemplate | undefined) {
        this._msdyn_defaultWorkTemplate = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_invoicefrequency property value. 
     * @returns a msdyn_invoicefrequency
     */
    public get msdyn_invoicefrequency() {
        return this._msdyn_invoicefrequency;
    };
    /**
     * Sets the msdyn_invoicefrequency property value. 
     * @param value Value to set for the msdyn_invoicefrequency property.
     */
    public set msdyn_invoicefrequency(value: Msdyn_invoicefrequency | undefined) {
        this._msdyn_invoicefrequency = value;
    };
    /**
     * Gets the msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter property value. 
     * @returns a msdyn_projectparameterpricelist
     */
    public get msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter() {
        return this._msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter;
    };
    /**
     * Sets the msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter property value. 
     * @param value Value to set for the msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter property.
     */
    public set msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter(value: Msdyn_projectparameterpricelist[] | undefined) {
        this._msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter = value;
    };
    /**
     * Gets the msdyn_pricelistdefaultingiscurrencyagnostic property value. 
     * @returns a boolean
     */
    public get msdyn_pricelistdefaultingiscurrencyagnostic() {
        return this._msdyn_pricelistdefaultingiscurrencyagnostic;
    };
    /**
     * Sets the msdyn_pricelistdefaultingiscurrencyagnostic property value. 
     * @param value Value to set for the msdyn_pricelistdefaultingiscurrencyagnostic property.
     */
    public set msdyn_pricelistdefaultingiscurrencyagnostic(value: boolean | undefined) {
        this._msdyn_pricelistdefaultingiscurrencyagnostic = value;
    };
    /**
     * Gets the msdyn_projectmanagerrole property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_projectmanagerrole() {
        return this._msdyn_projectmanagerrole;
    };
    /**
     * Sets the msdyn_projectmanagerrole property value. 
     * @param value Value to set for the msdyn_projectmanagerrole property.
     */
    public set msdyn_projectmanagerrole(value: Bookableresourcecategory | undefined) {
        this._msdyn_projectmanagerrole = value;
    };
    /**
     * Gets the msdyn_projectparameter_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_projectparameter_Annotations() {
        return this._msdyn_projectparameter_Annotations;
    };
    /**
     * Sets the msdyn_projectparameter_Annotations property value. 
     * @param value Value to set for the msdyn_projectparameter_Annotations property.
     */
    public set msdyn_projectparameter_Annotations(value: Annotation[] | undefined) {
        this._msdyn_projectparameter_Annotations = value;
    };
    /**
     * Gets the msdyn_projectparameter_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_projectparameter_AsyncOperations() {
        return this._msdyn_projectparameter_AsyncOperations;
    };
    /**
     * Sets the msdyn_projectparameter_AsyncOperations property value. 
     * @param value Value to set for the msdyn_projectparameter_AsyncOperations property.
     */
    public set msdyn_projectparameter_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_projectparameter_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_projectparameter_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_projectparameter_BulkDeleteFailures() {
        return this._msdyn_projectparameter_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_projectparameter_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_projectparameter_BulkDeleteFailures property.
     */
    public set msdyn_projectparameter_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_projectparameter_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_projectparameter_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projectparameter_DuplicateBaseRecord() {
        return this._msdyn_projectparameter_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_projectparameter_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_projectparameter_DuplicateBaseRecord property.
     */
    public set msdyn_projectparameter_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projectparameter_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_projectparameter_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projectparameter_DuplicateMatchingRecord() {
        return this._msdyn_projectparameter_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_projectparameter_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_projectparameter_DuplicateMatchingRecord property.
     */
    public set msdyn_projectparameter_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projectparameter_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_projectparameter_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_projectparameter_MailboxTrackingFolders() {
        return this._msdyn_projectparameter_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_projectparameter_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_projectparameter_MailboxTrackingFolders property.
     */
    public set msdyn_projectparameter_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_projectparameter_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_projectparameter_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_projectparameter_PrincipalObjectAttributeAccesses() {
        return this._msdyn_projectparameter_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_projectparameter_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_projectparameter_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_projectparameter_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_projectparameter_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_projectparameter_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_projectparameter_ProcessSession() {
        return this._msdyn_projectparameter_ProcessSession;
    };
    /**
     * Sets the msdyn_projectparameter_ProcessSession property value. 
     * @param value Value to set for the msdyn_projectparameter_ProcessSession property.
     */
    public set msdyn_projectparameter_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_projectparameter_ProcessSession = value;
    };
    /**
     * Gets the msdyn_projectparameter_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_projectparameter_SyncErrors() {
        return this._msdyn_projectparameter_SyncErrors;
    };
    /**
     * Sets the msdyn_projectparameter_SyncErrors property value. 
     * @param value Value to set for the msdyn_projectparameter_SyncErrors property.
     */
    public set msdyn_projectparameter_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_projectparameter_SyncErrors = value;
    };
    /**
     * Gets the msdyn_projectparameterid property value. 
     * @returns a string
     */
    public get msdyn_projectparameterid() {
        return this._msdyn_projectparameterid;
    };
    /**
     * Sets the msdyn_projectparameterid property value. 
     * @param value Value to set for the msdyn_projectparameterid property.
     */
    public set msdyn_projectparameterid(value: string | undefined) {
        this._msdyn_projectparameterid = value;
    };
    /**
     * Gets the msdyn_projectresourcerequirementsvisibletore property value. 
     * @returns a boolean
     */
    public get msdyn_projectresourcerequirementsvisibletore() {
        return this._msdyn_projectresourcerequirementsvisibletore;
    };
    /**
     * Sets the msdyn_projectresourcerequirementsvisibletore property value. 
     * @param value Value to set for the msdyn_projectresourcerequirementsvisibletore property.
     */
    public set msdyn_projectresourcerequirementsvisibletore(value: boolean | undefined) {
        this._msdyn_projectresourcerequirementsvisibletore = value;
    };
    /**
     * Gets the msdyn_resourceallocationmode property value. 
     * @returns a integer
     */
    public get msdyn_resourceallocationmode() {
        return this._msdyn_resourceallocationmode;
    };
    /**
     * Sets the msdyn_resourceallocationmode property value. 
     * @param value Value to set for the msdyn_resourceallocationmode property.
     */
    public set msdyn_resourceallocationmode(value: number | undefined) {
        this._msdyn_resourceallocationmode = value;
    };
    /**
     * Gets the msdyn_teammemberrole property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_teammemberrole() {
        return this._msdyn_teammemberrole;
    };
    /**
     * Sets the msdyn_teammemberrole property value. 
     * @param value Value to set for the msdyn_teammemberrole property.
     */
    public set msdyn_teammemberrole(value: Bookableresourcecategory | undefined) {
        this._msdyn_teammemberrole = value;
    };
    /**
     * Gets the msdyn_upgradebatchsize property value. 
     * @returns a integer
     */
    public get msdyn_upgradebatchsize() {
        return this._msdyn_upgradebatchsize;
    };
    /**
     * Sets the msdyn_upgradebatchsize property value. 
     * @param value Value to set for the msdyn_upgradebatchsize property.
     */
    public set msdyn_upgradebatchsize(value: number | undefined) {
        this._msdyn_upgradebatchsize = value;
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
        writer.writeStringValue("_msdyn_defaultorganizationalunit_value", this._msdyn_defaultorganizationalunit_value);
        writer.writeStringValue("_msdyn_defaultworktemplate_value", this._msdyn_defaultworktemplate_value);
        writer.writeStringValue("_msdyn_invoicefrequency_value", this._msdyn_invoicefrequency_value);
        writer.writeStringValue("_msdyn_projectmanagerrole_value", this._msdyn_projectmanagerrole_value);
        writer.writeStringValue("_msdyn_teammemberrole_value", this._msdyn_teammemberrole_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_allowskillupdatebyresource", this.msdyn_allowskillupdatebyresource);
        writer.writeNumberValue("msdyn_backgroundapprovalthreshold", this.msdyn_backgroundapprovalthreshold);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_defaultorganizationalunit", this.msdyn_defaultorganizationalunit);
        writer.writeObjectValue<Msdyn_workhourtemplate>("msdyn_defaultWorkTemplate", this.msdyn_defaultWorkTemplate);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeObjectValue<Msdyn_invoicefrequency>("msdyn_invoicefrequency", this.msdyn_invoicefrequency);
        writer.writeCollectionOfObjectValues<Msdyn_projectparameterpricelist>("msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter", this.msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter);
        writer.writeBooleanValue("msdyn_pricelistdefaultingiscurrencyagnostic", this.msdyn_pricelistdefaultingiscurrencyagnostic);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_projectmanagerrole", this.msdyn_projectmanagerrole);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_projectparameter_Annotations", this.msdyn_projectparameter_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_projectparameter_AsyncOperations", this.msdyn_projectparameter_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_projectparameter_BulkDeleteFailures", this.msdyn_projectparameter_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projectparameter_DuplicateBaseRecord", this.msdyn_projectparameter_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projectparameter_DuplicateMatchingRecord", this.msdyn_projectparameter_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_projectparameter_MailboxTrackingFolders", this.msdyn_projectparameter_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_projectparameter_PrincipalObjectAttributeAccesses", this.msdyn_projectparameter_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_projectparameter_ProcessSession", this.msdyn_projectparameter_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_projectparameter_SyncErrors", this.msdyn_projectparameter_SyncErrors);
        writer.writeStringValue("msdyn_projectparameterid", this.msdyn_projectparameterid);
        writer.writeBooleanValue("msdyn_projectresourcerequirementsvisibletore", this.msdyn_projectresourcerequirementsvisibletore);
        writer.writeNumberValue("msdyn_resourceallocationmode", this.msdyn_resourceallocationmode);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_teammemberrole", this.msdyn_teammemberrole);
        writer.writeNumberValue("msdyn_upgradebatchsize", this.msdyn_upgradebatchsize);
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
