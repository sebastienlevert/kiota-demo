import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createKbarticleFromDiscriminatorValue} from './createKbarticleFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Kbarticle, Organization, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Kbarticletemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _formatxml?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _isactive?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _kb_article_template_kb_articles?: Kbarticle[] | undefined;
    private _kbArticleTemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _kbArticleTemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _kbArticleTemplate_ProcessSessions?: Processsession[] | undefined;
    private _kbArticleTemplate_SyncErrors?: Syncerror[] | undefined;
    private _kbarticletemplateid?: string | undefined;
    private _kbarticletemplateidunique?: string | undefined;
    private _languagecode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _structurexml?: string | undefined;
    private _title?: string | undefined;
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
     * Instantiates a new kbarticletemplate and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the formatxml property value. 
     * @returns a string
     */
    public get formatxml() {
        return this._formatxml;
    };
    /**
     * Sets the formatxml property value. 
     * @param value Value to set for the formatxml property.
     */
    public set formatxml(value: string | undefined) {
        this._formatxml = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Kbarticletemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Kbarticletemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Kbarticletemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Kbarticletemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Kbarticletemplate)._organizationid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Kbarticletemplate).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Kbarticletemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Kbarticletemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Kbarticletemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Kbarticletemplate).description = n.getStringValue(); },
            "formatxml": (o, n) => { (o as unknown as Kbarticletemplate).formatxml = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Kbarticletemplate).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Kbarticletemplate).introducedversion = n.getStringValue(); },
            "isactive": (o, n) => { (o as unknown as Kbarticletemplate).isactive = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Kbarticletemplate).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Kbarticletemplate).ismanaged = n.getBooleanValue(); },
            "kb_article_template_kb_articles": (o, n) => { (o as unknown as Kbarticletemplate).kb_article_template_kb_articles = n.getCollectionOfObjectValues<Kbarticle>(createKbarticleFromDiscriminatorValue); },
            "kbArticleTemplate_AsyncOperations": (o, n) => { (o as unknown as Kbarticletemplate).kbArticleTemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "kbArticleTemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Kbarticletemplate).kbArticleTemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "kbArticleTemplate_ProcessSessions": (o, n) => { (o as unknown as Kbarticletemplate).kbArticleTemplate_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "kbArticleTemplate_SyncErrors": (o, n) => { (o as unknown as Kbarticletemplate).kbArticleTemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "kbarticletemplateid": (o, n) => { (o as unknown as Kbarticletemplate).kbarticletemplateid = n.getStringValue(); },
            "kbarticletemplateidunique": (o, n) => { (o as unknown as Kbarticletemplate).kbarticletemplateidunique = n.getStringValue(); },
            "languagecode": (o, n) => { (o as unknown as Kbarticletemplate).languagecode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Kbarticletemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Kbarticletemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Kbarticletemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Kbarticletemplate).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Kbarticletemplate).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Kbarticletemplate).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Kbarticletemplate).solutionid = n.getStringValue(); },
            "structurexml": (o, n) => { (o as unknown as Kbarticletemplate).structurexml = n.getStringValue(); },
            "title": (o, n) => { (o as unknown as Kbarticletemplate).title = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Kbarticletemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the isactive property value. 
     * @returns a boolean
     */
    public get isactive() {
        return this._isactive;
    };
    /**
     * Sets the isactive property value. 
     * @param value Value to set for the isactive property.
     */
    public set isactive(value: boolean | undefined) {
        this._isactive = value;
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
     * Gets the kb_article_template_kb_articles property value. 
     * @returns a kbarticle
     */
    public get kb_article_template_kb_articles() {
        return this._kb_article_template_kb_articles;
    };
    /**
     * Sets the kb_article_template_kb_articles property value. 
     * @param value Value to set for the kb_article_template_kb_articles property.
     */
    public set kb_article_template_kb_articles(value: Kbarticle[] | undefined) {
        this._kb_article_template_kb_articles = value;
    };
    /**
     * Gets the kbArticleTemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get kbArticleTemplate_AsyncOperations() {
        return this._kbArticleTemplate_AsyncOperations;
    };
    /**
     * Sets the kbArticleTemplate_AsyncOperations property value. 
     * @param value Value to set for the KbArticleTemplate_AsyncOperations property.
     */
    public set kbArticleTemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._kbArticleTemplate_AsyncOperations = value;
    };
    /**
     * Gets the kbArticleTemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get kbArticleTemplate_BulkDeleteFailures() {
        return this._kbArticleTemplate_BulkDeleteFailures;
    };
    /**
     * Sets the kbArticleTemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the KbArticleTemplate_BulkDeleteFailures property.
     */
    public set kbArticleTemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._kbArticleTemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the kbArticleTemplate_ProcessSessions property value. 
     * @returns a processsession
     */
    public get kbArticleTemplate_ProcessSessions() {
        return this._kbArticleTemplate_ProcessSessions;
    };
    /**
     * Sets the kbArticleTemplate_ProcessSessions property value. 
     * @param value Value to set for the KbArticleTemplate_ProcessSessions property.
     */
    public set kbArticleTemplate_ProcessSessions(value: Processsession[] | undefined) {
        this._kbArticleTemplate_ProcessSessions = value;
    };
    /**
     * Gets the kbArticleTemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get kbArticleTemplate_SyncErrors() {
        return this._kbArticleTemplate_SyncErrors;
    };
    /**
     * Sets the kbArticleTemplate_SyncErrors property value. 
     * @param value Value to set for the KbArticleTemplate_SyncErrors property.
     */
    public set kbArticleTemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._kbArticleTemplate_SyncErrors = value;
    };
    /**
     * Gets the kbarticletemplateid property value. 
     * @returns a string
     */
    public get kbarticletemplateid() {
        return this._kbarticletemplateid;
    };
    /**
     * Sets the kbarticletemplateid property value. 
     * @param value Value to set for the kbarticletemplateid property.
     */
    public set kbarticletemplateid(value: string | undefined) {
        this._kbarticletemplateid = value;
    };
    /**
     * Gets the kbarticletemplateidunique property value. 
     * @returns a string
     */
    public get kbarticletemplateidunique() {
        return this._kbarticletemplateidunique;
    };
    /**
     * Sets the kbarticletemplateidunique property value. 
     * @param value Value to set for the kbarticletemplateidunique property.
     */
    public set kbarticletemplateidunique(value: string | undefined) {
        this._kbarticletemplateidunique = value;
    };
    /**
     * Gets the languagecode property value. 
     * @returns a integer
     */
    public get languagecode() {
        return this._languagecode;
    };
    /**
     * Sets the languagecode property value. 
     * @param value Value to set for the languagecode property.
     */
    public set languagecode(value: number | undefined) {
        this._languagecode = value;
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
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("formatxml", this.formatxml);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("isactive", this.isactive);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeCollectionOfObjectValues<Kbarticle>("kb_article_template_kb_articles", this.kb_article_template_kb_articles);
        writer.writeCollectionOfObjectValues<Asyncoperation>("kbArticleTemplate_AsyncOperations", this.kbArticleTemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("kbArticleTemplate_BulkDeleteFailures", this.kbArticleTemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Processsession>("kbArticleTemplate_ProcessSessions", this.kbArticleTemplate_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("kbArticleTemplate_SyncErrors", this.kbArticleTemplate_SyncErrors);
        writer.writeStringValue("kbarticletemplateid", this.kbarticletemplateid);
        writer.writeStringValue("kbarticletemplateidunique", this.kbarticletemplateidunique);
        writer.writeNumberValue("languagecode", this.languagecode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("structurexml", this.structurexml);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the structurexml property value. 
     * @returns a string
     */
    public get structurexml() {
        return this._structurexml;
    };
    /**
     * Sets the structurexml property value. 
     * @param value Value to set for the structurexml property.
     */
    public set structurexml(value: string | undefined) {
        this._structurexml = value;
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
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
