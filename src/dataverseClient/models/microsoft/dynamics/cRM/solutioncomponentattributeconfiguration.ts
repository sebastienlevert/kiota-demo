import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createAttributeFromDiscriminatorValue} from './createAttributeFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSolutioncomponentconfigurationFromDiscriminatorValue} from './createSolutioncomponentconfigurationFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Attribute, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Solutioncomponentconfiguration, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Solutioncomponentattributeconfiguration extends Crmbaseentity implements Parsable {
    private __attributeid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __solutioncomponentconfigurationid_value?: string | undefined;
    private _attributeId?: Attribute | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _encodingformat?: number | undefined;
    private _fileextension?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isenabledfordependencyextraction?: boolean | undefined;
    private _isexportdisabled?: boolean | undefined;
    private _isexportedasfile?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isprefixedbytemplate?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutioncomponentattributeconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _solutioncomponentattributeconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _solutioncomponentattributeconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _solutioncomponentattributeconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _solutioncomponentattributeconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _solutioncomponentattributeconfiguration_ProcessSession?: Processsession[] | undefined;
    private _solutioncomponentattributeconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _solutioncomponentattributeconfigurationid?: string | undefined;
    private _solutioncomponentconfigurationid?: Solutioncomponentconfiguration | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _attributeid_value property value. 
     * @returns a string
     */
    public get _attributeid_value() {
        return this.__attributeid_value;
    };
    /**
     * Sets the _attributeid_value property value. 
     * @param value Value to set for the _attributeid_value property.
     */
    public set _attributeid_value(value: string | undefined) {
        this.__attributeid_value = value;
    };
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
     * Gets the _solutioncomponentconfigurationid_value property value. 
     * @returns a string
     */
    public get _solutioncomponentconfigurationid_value() {
        return this.__solutioncomponentconfigurationid_value;
    };
    /**
     * Sets the _solutioncomponentconfigurationid_value property value. 
     * @param value Value to set for the _solutioncomponentconfigurationid_value property.
     */
    public set _solutioncomponentconfigurationid_value(value: string | undefined) {
        this.__solutioncomponentconfigurationid_value = value;
    };
    /**
     * Gets the attributeId property value. 
     * @returns a attribute
     */
    public get attributeId() {
        return this._attributeId;
    };
    /**
     * Sets the attributeId property value. 
     * @param value Value to set for the AttributeId property.
     */
    public set attributeId(value: Attribute | undefined) {
        this._attributeId = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new solutioncomponentattributeconfiguration and sets the default values.
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
     * Gets the encodingformat property value. 
     * @returns a integer
     */
    public get encodingformat() {
        return this._encodingformat;
    };
    /**
     * Sets the encodingformat property value. 
     * @param value Value to set for the encodingformat property.
     */
    public set encodingformat(value: number | undefined) {
        this._encodingformat = value;
    };
    /**
     * Gets the fileextension property value. 
     * @returns a string
     */
    public get fileextension() {
        return this._fileextension;
    };
    /**
     * Sets the fileextension property value. 
     * @param value Value to set for the fileextension property.
     */
    public set fileextension(value: string | undefined) {
        this._fileextension = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_attributeid_value": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration)._attributeid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration)._organizationid_value = n.getStringValue(); },
            "_solutioncomponentconfigurationid_value": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration)._solutioncomponentconfigurationid_value = n.getStringValue(); },
            "attributeId": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).attributeId = n.getObjectValue<Attribute>(createAttributeFromDiscriminatorValue); },
            "componentidunique": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "encodingformat": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).encodingformat = n.getNumberValue(); },
            "fileextension": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).fileextension = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isenabledfordependencyextraction": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).isenabledfordependencyextraction = n.getBooleanValue(); },
            "isexportdisabled": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).isexportdisabled = n.getBooleanValue(); },
            "isexportedasfile": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).isexportedasfile = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).ismanaged = n.getBooleanValue(); },
            "isprefixedbytemplate": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).isprefixedbytemplate = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).overwritetime = n.getDateValue(); },
            "solutioncomponentattributeconfiguration_AsyncOperations": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "solutioncomponentattributeconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "solutioncomponentattributeconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "solutioncomponentattributeconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "solutioncomponentattributeconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "solutioncomponentattributeconfiguration_ProcessSession": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "solutioncomponentattributeconfiguration_SyncErrors": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "solutioncomponentattributeconfigurationid": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentattributeconfigurationid = n.getStringValue(); },
            "solutioncomponentconfigurationid": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutioncomponentconfigurationid = n.getObjectValue<Solutioncomponentconfiguration>(createSolutioncomponentconfigurationFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Solutioncomponentattributeconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the isenabledfordependencyextraction property value. 
     * @returns a boolean
     */
    public get isenabledfordependencyextraction() {
        return this._isenabledfordependencyextraction;
    };
    /**
     * Sets the isenabledfordependencyextraction property value. 
     * @param value Value to set for the isenabledfordependencyextraction property.
     */
    public set isenabledfordependencyextraction(value: boolean | undefined) {
        this._isenabledfordependencyextraction = value;
    };
    /**
     * Gets the isexportdisabled property value. 
     * @returns a boolean
     */
    public get isexportdisabled() {
        return this._isexportdisabled;
    };
    /**
     * Sets the isexportdisabled property value. 
     * @param value Value to set for the isexportdisabled property.
     */
    public set isexportdisabled(value: boolean | undefined) {
        this._isexportdisabled = value;
    };
    /**
     * Gets the isexportedasfile property value. 
     * @returns a boolean
     */
    public get isexportedasfile() {
        return this._isexportedasfile;
    };
    /**
     * Sets the isexportedasfile property value. 
     * @param value Value to set for the isexportedasfile property.
     */
    public set isexportedasfile(value: boolean | undefined) {
        this._isexportedasfile = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the isprefixedbytemplate property value. 
     * @returns a boolean
     */
    public get isprefixedbytemplate() {
        return this._isprefixedbytemplate;
    };
    /**
     * Sets the isprefixedbytemplate property value. 
     * @param value Value to set for the isprefixedbytemplate property.
     */
    public set isprefixedbytemplate(value: boolean | undefined) {
        this._isprefixedbytemplate = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_attributeid_value", this._attributeid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_solutioncomponentconfigurationid_value", this._solutioncomponentconfigurationid_value);
        writer.writeObjectValue<Attribute>("attributeId", this.attributeId);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("encodingformat", this.encodingformat);
        writer.writeStringValue("fileextension", this.fileextension);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isenabledfordependencyextraction", this.isenabledfordependencyextraction);
        writer.writeBooleanValue("isexportdisabled", this.isexportdisabled);
        writer.writeBooleanValue("isexportedasfile", this.isexportedasfile);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isprefixedbytemplate", this.isprefixedbytemplate);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Asyncoperation>("solutioncomponentattributeconfiguration_AsyncOperations", this.solutioncomponentattributeconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("solutioncomponentattributeconfiguration_BulkDeleteFailures", this.solutioncomponentattributeconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("solutioncomponentattributeconfiguration_DuplicateBaseRecord", this.solutioncomponentattributeconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("solutioncomponentattributeconfiguration_DuplicateMatchingRecord", this.solutioncomponentattributeconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("solutioncomponentattributeconfiguration_MailboxTrackingFolders", this.solutioncomponentattributeconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses", this.solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("solutioncomponentattributeconfiguration_ProcessSession", this.solutioncomponentattributeconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("solutioncomponentattributeconfiguration_SyncErrors", this.solutioncomponentattributeconfiguration_SyncErrors);
        writer.writeStringValue("solutioncomponentattributeconfigurationid", this.solutioncomponentattributeconfigurationid);
        writer.writeObjectValue<Solutioncomponentconfiguration>("solutioncomponentconfigurationid", this.solutioncomponentconfigurationid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutioncomponentattributeconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get solutioncomponentattributeconfiguration_AsyncOperations() {
        return this._solutioncomponentattributeconfiguration_AsyncOperations;
    };
    /**
     * Sets the solutioncomponentattributeconfiguration_AsyncOperations property value. 
     * @param value Value to set for the solutioncomponentattributeconfiguration_AsyncOperations property.
     */
    public set solutioncomponentattributeconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._solutioncomponentattributeconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the solutioncomponentattributeconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get solutioncomponentattributeconfiguration_BulkDeleteFailures() {
        return this._solutioncomponentattributeconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the solutioncomponentattributeconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the solutioncomponentattributeconfiguration_BulkDeleteFailures property.
     */
    public set solutioncomponentattributeconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._solutioncomponentattributeconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the solutioncomponentattributeconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get solutioncomponentattributeconfiguration_DuplicateBaseRecord() {
        return this._solutioncomponentattributeconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the solutioncomponentattributeconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the solutioncomponentattributeconfiguration_DuplicateBaseRecord property.
     */
    public set solutioncomponentattributeconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._solutioncomponentattributeconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the solutioncomponentattributeconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get solutioncomponentattributeconfiguration_DuplicateMatchingRecord() {
        return this._solutioncomponentattributeconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the solutioncomponentattributeconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the solutioncomponentattributeconfiguration_DuplicateMatchingRecord property.
     */
    public set solutioncomponentattributeconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._solutioncomponentattributeconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the solutioncomponentattributeconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get solutioncomponentattributeconfiguration_MailboxTrackingFolders() {
        return this._solutioncomponentattributeconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the solutioncomponentattributeconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the solutioncomponentattributeconfiguration_MailboxTrackingFolders property.
     */
    public set solutioncomponentattributeconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._solutioncomponentattributeconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses() {
        return this._solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the solutioncomponentattributeconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get solutioncomponentattributeconfiguration_ProcessSession() {
        return this._solutioncomponentattributeconfiguration_ProcessSession;
    };
    /**
     * Sets the solutioncomponentattributeconfiguration_ProcessSession property value. 
     * @param value Value to set for the solutioncomponentattributeconfiguration_ProcessSession property.
     */
    public set solutioncomponentattributeconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._solutioncomponentattributeconfiguration_ProcessSession = value;
    };
    /**
     * Gets the solutioncomponentattributeconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get solutioncomponentattributeconfiguration_SyncErrors() {
        return this._solutioncomponentattributeconfiguration_SyncErrors;
    };
    /**
     * Sets the solutioncomponentattributeconfiguration_SyncErrors property value. 
     * @param value Value to set for the solutioncomponentattributeconfiguration_SyncErrors property.
     */
    public set solutioncomponentattributeconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._solutioncomponentattributeconfiguration_SyncErrors = value;
    };
    /**
     * Gets the solutioncomponentattributeconfigurationid property value. 
     * @returns a string
     */
    public get solutioncomponentattributeconfigurationid() {
        return this._solutioncomponentattributeconfigurationid;
    };
    /**
     * Sets the solutioncomponentattributeconfigurationid property value. 
     * @param value Value to set for the solutioncomponentattributeconfigurationid property.
     */
    public set solutioncomponentattributeconfigurationid(value: string | undefined) {
        this._solutioncomponentattributeconfigurationid = value;
    };
    /**
     * Gets the solutioncomponentconfigurationid property value. 
     * @returns a solutioncomponentconfiguration
     */
    public get solutioncomponentconfigurationid() {
        return this._solutioncomponentconfigurationid;
    };
    /**
     * Sets the solutioncomponentconfigurationid property value. 
     * @param value Value to set for the solutioncomponentconfigurationid property.
     */
    public set solutioncomponentconfigurationid(value: Solutioncomponentconfiguration | undefined) {
        this._solutioncomponentconfigurationid = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
